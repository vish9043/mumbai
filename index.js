function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 18.9437984, lng: 76.5282043 },
    zoom: 6,
  });

  // === SHOW CURRENT LOCATION AUTOMATICALLY ===
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        // Add a marker for your current location
        new google.maps.Marker({
          position: pos,
          map: map,
          title: "You are here",
          icon: {
            url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          },
        });

        map.setCenter(pos);
        map.setZoom(15);
      },
      () => {
        console.warn("Geolocation permission denied or unavailable");
      }
    );
  } else {
    console.warn("Geolocation not supported by this browser");
  }

  // === EXISTING BUTTON CODE (keep this) ===
  const locationButton = document.createElement("button");
  locationButton.textContent = "Around Me";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(locationButton);
  locationButton.addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          map.setCenter(pos);
          map.setZoom(16);
        }
      );
    }
  });
}
