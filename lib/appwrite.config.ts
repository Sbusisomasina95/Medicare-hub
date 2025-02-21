import * as sdk from 'node-appwrite';

export const {
    PROJECT_ID, 
    API_KEY, 
    DATABASE_ID, 
    PATIENT_COLLECTION_ID, 
    DOCTOR_COLLECTION_ID,
    APPOINTMENT_COLLECTION_ID, 
    NEXT_PUBLIC_BUCKET_ID : BUCKET_ID,
    NEXT_PUBLIC_ENDPOINT:ENDPOINT
} = process.env;

const client = new sdk.Client();

client
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('67ae47c800397654d233')
.setKey('standard_4126a4c68cbbc33d6461919485bd68adcc6e39c37517ba4b4db6e9de86ae5d183910469611ea72b2ec228282704edff61c78a62109c2002de9ade5818625867dd18dd656b4e493894d903883ec050016de4109788aecc58578db40e8cee37695e478874b353c22c02c6c1aecaeb2ab5295405c60a288a17ee9fb675a873e14f0');

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);