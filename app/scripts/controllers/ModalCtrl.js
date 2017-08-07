(function() {
    function ModalCtrl(Room, $uibModalInstance) {

        this.dismiss = function() {
          $uibModalInstance.dismiss('cancel');
        };

    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();