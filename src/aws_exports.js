export default {
    s3: {
      REGION: process.env.APP_REGION,
      BUCKET: process.env.S3_BUCKET
    },
    apiGateway: {
      REGION: process.env.APP_REGION,
      URL: process.env.APP_URL
    },
    cognito: {
      REGION: process.env.COGNITO_AWS_REGION,
      USER_POOL_ID: process.env.REACT_APP_DEV_USER_POOL_ID,
      APP_CLIENT_ID: process.env.REACT_APP_DEV_CLIENT_ID,
      IDENTITY_POOL_ID: process.env.REACT_APP_DEV_IDENTITY_POOL_ID
    }
  };