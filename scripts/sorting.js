import { createFragmentTemplate } from './helpers.js';

export function createSorting() {
    const sort = new URLSearchParams(location.search).get('sort');

    const nav = `
        <a class="sort__item open ${sort === 'name' ? 'active' : ''}" href="${location.origin + location.pathname + '?sort=name'}">Name</a>
        <a class="sort__item open ${sort === 'date' ? 'active' : ''}" href="${location.origin + location.pathname + '?sort=date'}">Date</a>
        `;

    return createFragmentTemplate(nav);

}