(function() {
    function ModalCtrl(Room, $uibModalInstance) {

        this.dismiss = function() {
          $uibModalInstance.close();
        };

        this.createRoom = function() {
            Room.add(this.newRoom);
            $uibModalInstance.close();
        };

    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();