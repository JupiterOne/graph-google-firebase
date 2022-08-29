import { executeStepWithDependencies } from '@jupiterone/integration-sdk-testing';
import { buildStepTestConfigForStep } from '../../../test/config';
import { Recording, setupGoogleCloudRecording } from '../../../test/recording';
import { Steps } from '../constants';

// See test/README.md for details
let recording: Recording;
afterEach(async () => {
  await recording.stop();
});

test('fetch-web-apps', async () => {
  recording = setupGoogleCloudRecording({
    directory: __dirname,
    name: 'fetch-web-apps',
  });

  const stepConfig = buildStepTestConfigForStep(Steps.WEB_APPS);
  const stepResult = await executeStepWithDependencies(stepConfig);
  expect(stepResult).toMatchStepMetadata(stepConfig);
});
