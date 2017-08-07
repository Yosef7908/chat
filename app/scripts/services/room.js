(function () {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        // this will console log the fetched object from firebase
        // console.log(rooms);
        Room.all = rooms;

        Room.add = function(room) {
            rooms.$add(room);
    }

        return Room;

    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room])
})();