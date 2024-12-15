import express from 'express'

import * as featureFlagController from '../controllers/feaureFlagController.js'

export const featureFlagRoutes = express.Router();

featureFlagRoutes.post('/', featureFlagController.createFeatureFlag);
featureFlagRoutes.get('/', featureFlagController.getAllFeatureFlags);
featureFlagRoutes.get('/:id', featureFlagController.getFeatureFlagById);
featureFlagRoutes.get('/byOrg/:id', featureFlagController.getAllFeatureFlagsByOrgId);
featureFlagRoutes.put('/:id', featureFlagController.updateFeatureFlag);
featureFlagRoutes.delete('/:id', featureFlagController.deleteFeatureFlag);
