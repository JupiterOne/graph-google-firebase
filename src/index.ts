import { IntegrationInvocationConfig } from '@jupiterone/integration-sdk-core';
import { integrationSteps } from './steps';
import { deserializeIntegrationConfig } from './utils/integrationConfig';
import getStepStartStates from './getStepStartStates';
import {
  validateInvocation,
  IntegrationConfig,
  instanceConfigFields,
} from './config';

export const invocationConfig: IntegrationInvocationConfig<IntegrationConfig> =
  {
    instanceConfigFields,
    getStepStartStates,
    validateInvocation,
    integrationSteps,
  };

export { IntegrationConfig, deserializeIntegrationConfig };
