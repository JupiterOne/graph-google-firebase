import { executeStepWithDependencies } from '@jupiterone/integration-sdk-testing';

import { buildStepTestConfigForStep } from '../../../test/config';
import { Recording, setupGoogleCloudRecording } from '../../../test/recording';
import { Steps } from '../constants';

// See test/README.md for details
let recording: Recording;
afterEach(async () => {
  await recording.stop();
});

test('fetch-account', async () => {
  recording = setupGoogleCloudRecording({
    directory: __dirname,
    name: 'fetch-account',
  });

  const stepConfig = buildStepTestConfigForStep(Steps.ACCOUNT);
  const stepResult = await executeStepWithDependencies(stepConfig);
  expect(stepResult).toMatchStepMetadata(stepConfig);
});
