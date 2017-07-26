(function () {
    function Room($firebaseArray) {

        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        // this will console log the fetched object from firebase
        // console.log(rooms);
        return {
            all: rooms
        };
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room])
})();