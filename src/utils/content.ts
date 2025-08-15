import { getCollection, type CollectionEntry } from 'astro:content';

export interface NavigationItem {
  title: string;
  href: string;
  description?: string;
  category?: string;
  order?: number;
}

export async function getDocumentationNavigation(): Promise<NavigationItem[]> {
  const docs = await getCollection('docs');
  
  return docs
    .sort((a, b) => (a.data.order || 999) - (b.data.order || 999))
    .map(doc => ({
      title: doc.data.title,
      href: `/docs/${doc.slug}`,
      description: doc.data.description,
      category: doc.data.category,
      order: doc.data.order,
    }));
}

export async function getGuidesNavigation(): Promise<NavigationItem[]> {
  const guides = await getCollection('guides');
  
  return guides
    .sort((a, b) => a.data.title.localeCompare(b.data.title))
    .map(guide => ({
      title: guide.data.title,
      href: `/guides/${guide.slug}`,
      description: guide.data.description,
    }));
}

export function groupByCategory<T extends NavigationItem>(items: T[]): Record<string, T[]> {
  return items.reduce((acc, item) => {
    const category = item.category || 'General';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as Record<string, T[]>);
}

export async function getRelatedContent(
  currentSlug: string,
  collection: 'docs' | 'guides',
  limit: number = 3
): Promise<NavigationItem[]> {
  const allContent = await getCollection(collection);
  const currentContent = allContent.find(item => item.slug === currentSlug);
  
  if (!currentContent) return [];
  
  // Simple related content logic - same category and tags
  const related = allContent
    .filter(item => 
      item.slug !== currentSlug && 
      (
        (item.data.category === currentContent.data.category) ||
        (item.data.tags && currentContent.data.tags && 
         item.data.tags.some(tag => currentContent.data.tags?.includes(tag)))
      )
    )
    .slice(0, limit);
  
  return related.map(item => ({
    title: item.data.title,
    href: `/${collection}/${item.slug}`,
    description: item.data.description,
    category: item.data.category,
  }));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export interface BreadcrumbItem {
  title: string;
  href?: string;
}

export function generateBreadcrumbs(
  pathname: string,
  currentTitle?: string
): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Home', href: '/' }
  ];
  
  let currentPath = '';
  
  for (let i = 0; i < segments.length; i++) {
    currentPath += `/${segments[i]}`;
    const isLast = i === segments.length - 1;
    
    let title = segments[i];
    
    // Capitalize and format segment names
    if (title === 'docs') title = 'Documentation';
    else if (title === 'guides') title = 'Guides';
    else if (title === 'specifications') title = 'Specifications';
    else if (title === 'resources') title = 'Resources';
    else {
      title = title.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
    }
    
    breadcrumbs.push({
      title: isLast && currentTitle ? currentTitle : title,
      href: isLast ? undefined : currentPath,
    });
  }
  
  return breadcrumbs;
}
