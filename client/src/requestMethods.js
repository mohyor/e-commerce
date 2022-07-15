import axios from "axios";

const BASE_URL = "http://localhost:4005/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzAzMGNkMmRhMjE1OTAwN2EwYTcxZiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTY3NjI1ODEsImV4cCI6MTY1NzAyMTc4MX0.BAB9wezKO4kmxMYIGrHPGdurc4-X53fjAIKNx9dkl_I";

export const publicRequest = axios.create({ baseURL: BASE_URL });
export const userRequest = axios.create({ baseURL: BASE_URL, header: { token: `Bearer ${TOKEN}` } });