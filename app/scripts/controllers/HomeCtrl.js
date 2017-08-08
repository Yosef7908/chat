(function () {
    function HomeCtrl(Room, Message, $uibModal) {

        this.rooms = Room.all;
        this.currentRoom = null;

	    this.openNewRoom = function () {
	          $uibModal.open({
	              templateUrl: 'templates/modal.html',
	              size: 'md',
	              controller: 'ModalCtrl as modal'
	          });
	        }

          this.storeRoomName = function (room) {
              this.currentRoom = room;
              this.messages = Message.getByRoomId(this.currentRoom.$id);
              console.log(this.currentRoom);
            }

          this.sendMessage = function () {
              Message.send(this.newMessage, this.currentRoom);
              this.newMessage = "";
            };

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
