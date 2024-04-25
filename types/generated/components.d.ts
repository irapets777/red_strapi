import type { Schema, Attribute } from '@strapi/strapi';

export interface HeaderNavHeaderNav extends Schema.Component {
  collectionName: 'components_header_nav_header_navs';
  info: {
    displayName: 'Header nav';
  };
  attributes: {
    menu_items: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'header-nav.header-nav': HeaderNavHeaderNav;
    }
  }
}
