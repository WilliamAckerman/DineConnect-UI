class User {
    constructor(UserID, username, email, password, phone, profilePic) {
        this.userID = userID;
        this.username = username;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.profilePic = profilePic;
    }
    login() {

    }
    logout() {

    }
    createAccount() {

    }
    updateProfile() {

    }
}

class Restaurant {
    constructor(restaurantID, restName, address, cuisine, avgRating) {
        this.restaurantID = restaurantID;
        this.restName = restName;
        this.address = address;
        this.cuisine = cuisine;
        this.avgRating = avgRating;
    }
    displayMenu() {

    }
    viewReviews() {

    }
    updateInfo() {

    }
}

class Reservation {
    constructor(reservationID, customer, restaurant, dateTime, specialRequests) {
        this.reservationID = reservationID;
        this.customer = customer;
        this.restaurant = restaurant;
        this.dateTime = dateTime;
        this.specialRequests = specialRequests;
    }
    confirmReservation() {

    }
    modifyReservation() {

    }
    cancelReservation() {

    }
}

class MenuItem {
    constructor(ItemID, name, description, price, allergenInfo) {
        this.itemID = itemID;
        this.name = name;
        this.description = description;
        this.price = price;
        this.allergenInfo = allergenInfo;
    }
    addToCart() {

    }
    removeFromCart() {

    }
    viewDetails() {

    }
}

class Order {
    constructor(OrderID, user, restaurant, items, totalPrice) {
        this.orderID = orderID;
        this.user = user;
        this.restaurant = restaurant;
        this.items = items;
        this.totalPrice = totalPrice;
    }
    placeOrder() {

    }
    cancelOrder() {

    }
    calculateTotal() {

    }
    modifyOrder() {

    }
}

class Feedback {
    constructor(FeedbackID, user, restaurant, rating, comment) {
        this.feedbackID = feedbackID;
        this.user = user;
        this.restaurant = restaurant;
        this.rating = rating;
        this.comment = comment;
    }
    submitFeedback() {

    }
    editFeedback() {

    }
    deleteFeedback() {

    }
}