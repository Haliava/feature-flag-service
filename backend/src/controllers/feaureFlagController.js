import { featureFlagRepository } from '../repository/feature_flag.js';
import { auditLogRepository } from '../repository/audit_log.js';
import {
  createFeatureFlag as createFeatureFlagService,
  deleteFeatureFlag as deleteFeatureFlagService,
  getAllFeatureFlags as getAllFeatureFlagsService,
  getFeatureFlagById as getFeatureFlagByIdService,
  updateFeatureFlag as updateFeatureFlagService,
  getAllFeatureFlagsByOrgId as getAllFeatureFlagsByOrgIdService,
} from '../services/featureFlagService.js';


export const createFeatureFlag = async (req, res) => {
    try {
        const newFeatureFlag = await createFeatureFlagService(
          featureFlagRepository,
          auditLogRepository,
          req.body,
          req.body.user.id
        );
        res.status(201).json(newFeatureFlag);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllFeatureFlags = async (req, res) => {
    try {
        const featureFlags = await getAllFeatureFlagsService(featureFlagRepository);
        res.status(200).json(featureFlags);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllFeatureFlagsByOrgId = async (req, res) => {
    console.log(req.params)
    try {
        const featureFlag = await getAllFeatureFlagsByOrgIdService(featureFlagRepository, req.params.id);
        if (!featureFlag) {
            return res.status(404).json({ message: 'Feature flag not found' });
        }
        res.status(200).json(featureFlag);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getFeatureFlagById = async (req, res) => {
    try {
        const featureFlag = await getFeatureFlagByIdService(featureFlagRepository, req.params.id);
        if (!featureFlag) {
            return res.status(404).json({ message: 'Feature flag not found' });
        }
        res.status(200).json(featureFlag);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateFeatureFlag = async (req, res) => {
    try {
        const updatedFeatureFlag = await updateFeatureFlagService(
          featureFlagRepository,
          req.params.id,
          auditLogRepository,
          req.body,
          req.body.user.id,
        );
        if (!updatedFeatureFlag) {
            return res.status(404).json({ message: 'Feature flag not found' });
        }
        res.status(200).json(updatedFeatureFlag);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteFeatureFlag = async (req, res) => {
    try {
        const deletedFeatureFlag = await deleteFeatureFlagService(
          featureFlagRepository,
          req.params.id,
          auditLogRepository,
          req.body.user.id,
        );
        if (!deletedFeatureFlag) {
            return res.status(404).json({ message: 'Feature flag not found' });
        }
        res.status(200).json(deletedFeatureFlag);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
