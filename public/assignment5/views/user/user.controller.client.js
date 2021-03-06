
(function() {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController)
        .controller("RegisterController", RegisterController)
        .controller("ProfileController", ProfileController);

        function LoginController(UserService, $location) {
            var vm = this;
            vm.Login = Login;
            vm.logout = logout;
            function logout() {
                UserService
                    .logout()
                    .then(
                        function(response) {
                            $rootScope.currentUser = null;
                            $location.url("/");
                        })
            }


                function Login(username, password) {
                    var user = {
                        username:username,
                        password:password
                    }
                var pro = UserService.login(user);
                    pro
                        .then(function(user){
                            vm.user = user.data;
                            console.log(user.data);
                            if(user === '0') {
                                vm.error = "No such user";
                            } else {
                                console.log(vm.user);
                                $location.url("/user/" + vm.user._id);
                            }
                        });

             function noUser() {
                  console.log("error at login")
                }


            }
        }

            function RegisterController(UserService,$routeParams,$location) {
                var vm = this;
                vm.register = register;
                function register( username, password, firstname,lastname ) {

                    var user = {username: username, password: password, firstName:firstname,lastName:lastname};

                                    var use  = UserService.createUser(user);
                                    use
                                        .success(RegisterSuccess)
                                        .error(RegisterError);




                    function RegisterSuccess(user) {
                        $location.url("/user/" + user._id);
                    }
                    function RegisterError() {
                        vm.error="RegisterFail";
                        vm.alert(vm.error);
                    }
                }

            }

            function ProfileController(UserService,$routeParams,$location) {

                var vm = this;
                vm.UpdateUser = UpdateUser;
                vm.GetWebsites = GetWebsites;
                vm.uid = $routeParams.uid;



                vm.pro = UserService.findUserById(vm.uid);

                vm.pro
                    .success(function(user) {
                        vm.user = user;
                        console.log(vm.user);
                    })
                    .error(function() {
                        console.log("profile erroe")
                    })

                function GetWebsites() {
                    $location.url("/user/" +vm.user._id +"/website");
                }

                function UpdateUser(username, password, firstname,lastname) {
                    var UserId = $routeParams.uid;

                    var use = { username: username, password: password, firstName:firstname,lastName:lastname};
console.log(use);

                    var promise = UserService.updateUser(UserId, use);
                   promise
                       .success(function(user) {
                           console.log(user);
                       })
                       .error(function() {
                           console.log("error update");
                       })

                }


            }



})();
