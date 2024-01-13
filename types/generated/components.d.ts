import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogsRelatedBlogs extends Schema.Component {
  collectionName: 'components_blogs_related_blogs';
  info: {
    displayName: 'RelatedBlogs';
    icon: 'repeat';
  };
  attributes: {
    intro: Attribute.String;
    blogs: Attribute.Relation<
      'blogs.related-blogs',
      'oneToMany',
      'api::blog.blog'
    >;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
    icon: 'book';
    description: '';
  };
  attributes: {
    sharedImage: Attribute.Component<'shared.shared-image', true>;
    metaTitle: Attribute.String;
    metaDescription: Attribute.String;
    structuredData: Attribute.JSON;
  };
}

export interface SharedSharedImage extends Schema.Component {
  collectionName: 'components_shared_shared_images';
  info: {
    displayName: 'SharedImage';
    icon: 'alien';
  };
  attributes: {
    alt: Attribute.String;
    media: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blogs.related-blogs': BlogsRelatedBlogs;
      'shared.seo': SharedSeo;
      'shared.shared-image': SharedSharedImage;
    }
  }
}
