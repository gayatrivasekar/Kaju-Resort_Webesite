const roomDetails = {
  first: {
    image: "/assets/roomhd.jpg",
    info: "First Suite: Comfortable suite with all basic amenities, perfect for a cozy stay. Price: <b>₹399.00/night.</b>",
    price: 399.0,
  },
  second: {
    image: "/assets/roomhd2.jpg",
    info: "Second Suite: A more spacious suite with additional facilities, ideal for a luxurious experience. Price: <b>₹599.00/night.</b>",
    price: 599.0,
  },
  luxury: {
    image: "/assets/roomhd3.jpg",
    info: "Luxury Penthouse: Top-notch penthouse offering the best comfort and view, suitable for a premium stay. Price: <b>₹799.00/night.</b>",
    price: 799.0,
  },
  dormitory: {
    image: "/assets/room-2.jpg",
    info: "Dormitory: Affordable shared dormitory with essential facilities, perfect for budget travelers. Price: <b>₹199.00/night.</b>",
    price: 199.0,
  },
};

function updateRoomInfo(roomType) {
  const roomInfoDiv = document.getElementById("room-info");
  const totalPriceInput = document.getElementById("total-price");
  const checkboxes = document.querySelectorAll(
    'input[name="room-type"]:checked'
  );
  let totalPrice = 0;
  let roomInfoContent = "";

  checkboxes.forEach((checkbox) => {
    const room = roomDetails[checkbox.value];
    totalPrice += room.price;
    roomInfoContent += ` 
        <div class="room-info-item">
          <img src="${room.image}" alt="${checkbox.value}">
          <p>${room.info}</p> <br>
        </div>
      `;
  });

  totalPriceInput.value = totalPrice.toFixed(2);

  if (roomInfoContent) {
    roomInfoDiv.innerHTML = roomInfoContent;
    roomInfoDiv.style.display = "block";
  } else {
    roomInfoDiv.style.display = "none";
  }
}
