export const createFeatureFlag = async (featureFlagRepository, auditLogRepository, featureFlagData, userId) => {
  const { name, description, status, organizationId } = featureFlagData;

  // const existingFlag = await featureFlagRepository.findByOrganization(organizationId);
  // if (existingFlag) {
  //     throw new Error('Feature flag with this name already exists in the organization.');
  // }

  const newFeatureFlag = await featureFlagRepository.create({ name, description, status, organizationId });

  await auditLogRepository.create({
    userId,
    featureFlagId: newFeatureFlag.id,
    action: 'create',
    timestamp: new Date()
  });

  return newFeatureFlag;
};

export const getAllFeatureFlags = async (featureFlagRepository) => {
  return await featureFlagRepository.findAll();
};

export const getAllFeatureFlagsByOrgId = async (featureFlagRepository, orgId) => {
  return await featureFlagRepository.findByOrganization(orgId);
};

export const getFeatureFlagById = async (featureFlagRepository, id) => {
  return await featureFlagRepository.findById(id);
};

export const updateFeatureFlag = async (featureFlagRepository, id, auditLogRepository, updatedData, userId) => {
  const updatedFeatureFlag = await featureFlagRepository.update(id, updatedData);
  if (!updatedFeatureFlag) {
    throw new Error('Feature flag not found');
  }

  await auditLogRepository.create({
    userId,
    featureFlagId: id,
    action: 'update',
    timestamp: new Date()
  });

  return updatedFeatureFlag;
};

export const deleteFeatureFlag = async (featureFlagRepository, id, auditLogRepository, userId) => {
  console.log(id, userId)
  await auditLogRepository.create({
    userId,
    featureFlagId: id,
    action: 'delete',
    timestamp: new Date()
  });

  const deletedFeatureFlag = await featureFlagRepository.delete(id);
  if (!deletedFeatureFlag) {
    throw new Error('Feature flag not found');
  }

  return deletedFeatureFlag;
};
