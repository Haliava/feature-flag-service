import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import { userRoutes } from './src/routes/user.js'
import { orgRoutes } from './src/routes/organization.js'
import { accessControlRoutes } from './src/routes/accesControl.js'
import { featureFlagRoutes } from './src/routes/featureFlag.js'
import { orgSettingsRoutes } from './src/routes/organizationSettings.js'
import { userOrganizationRoutes } from './src/routes/userOrganization.js'
import { logsRoutes } from './src/routes/logs.js'

const app = express()
const port = 3000
// postgres is listening to 5432
app.use(express.json())
app.use(bodyParser.json());
app.use(
  cors({
    origin: '*',
  }),
);

app.use('/api/users', userRoutes);
app.use('/api/organizations', orgRoutes);
app.use('/api/accessControl', accessControlRoutes);
app.use('/api/feature-flags', featureFlagRoutes);
app.use('/api/organization-settings', orgSettingsRoutes);
app.use('/api/user-organization', userOrganizationRoutes);
app.use('/api/logs', logsRoutes)

const startApp = async () => {
  try {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  } catch (e) {
    console.log(e);
  }
}  

startApp()