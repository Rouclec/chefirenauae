"use client"
import { useState, useEffect } from 'react';

// Refactored to use an array of websites
const websites = [
  { url: 'https://arjan.chef-irina.com/', lat: 25.061307345984293, lon: 55.24605440725327 },
  { url: 'https://bb.chef-irina.com/', lat: 25.12835077653817, lon: 55.39223983029292 },
  { url: 'https://dso.chef-irina.com/', lat: 25.12809497775560, lon: 55.38962757656931 },
];

interface Location {
  lat: number;
  lon: number;
}

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
    Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export function useNearestWebsite() { // Renamed hook for clarity
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [nearestWebsite, setNearestWebsite] = useState<string>('');

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    if (userLocation) {
      const nearest = websites.reduce(
        (closest, website) => {
          const distance = calculateDistance(
            userLocation.lat,
            userLocation.lon,
            website.lat,
            website.lon
          );
          return distance < closest.distance ? { distance, url: website.url } : closest;
        },
        { distance: Infinity, url: '' }
      );

      setNearestWebsite(nearest.url);
      // Optionally, add redirection logic here
    }
  }, [userLocation]);

  return nearestWebsite;
}
