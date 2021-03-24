import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const { lat, lng } = result.results[0].geometry.location;
  const { viewport } = result.results[0].geometry;

  return { lat, lng, viewport };
};
