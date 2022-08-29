import { firebase_v1beta1 } from 'googleapis';
import {
  createIntegrationEntity,
  createDirectRelationship,
  Entity,
  RelationshipClass,
  Relationship,
} from '@jupiterone/integration-sdk-core';
import { Entities } from '../constants';

export function createWebAppEntity(
  webApp: firebase_v1beta1.Schema$WebApp,
): Entity {
  return createIntegrationEntity({
    entityData: {
      source: webApp,
      assign: {
        _type: Entities.WEBAPP._type,
        _class: Entities.WEBAPP._class,
        _key: `google_firebase_webapp:${webApp.appId}`,
        appId: webApp.appId,
        appUrls: webApp.appUrls,
        displayName: webApp.displayName || undefined,
        name: webApp.name,
        projectId: webApp.projectId,
        webId: webApp.webId,
      },
    },
  });
}

export function createWebappProjectRelationship(
  webApp: Entity,
  project: Entity,
): Relationship {
  return createDirectRelationship({
    _class: RelationshipClass.HAS,
    from: project,
    to: webApp,
  });
}
