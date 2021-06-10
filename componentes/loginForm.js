const loginForm = `
<div class="row w-100 p-0 m-0 container-login">
    <div class="col-lg-6 col-md-8 login-box m-auto">
        <div class="col-lg-12 login-key">
            <i class="fa fa-key" aria-hidden="true"></i>
        </div>
        <div class="col-lg-12 login-title">
            Login
        </div>
        <div class="col-lg-12 login-form">
            <form>
                <div class="form-group">
                    <label class="form-control-label">EMAIL</label>
                    <input type="text" id="emailLog" class="form-control" id="email">
                </div>
                <div class="form-group mb-0">
                    <label class="form-control-label">PASSWORD</label>
                    <input type="password" id="passLog" class="form-control" i>
                </div>
                <div class="text-center pb-4 pt-2">
                    <button type="button" id="btnlogin" class="btn btn-primary" onclick="handlerLogin()">LOGIN</button>
                </div>
                <div class="col-lg-12 loginbttm">
                    <div class="col-lg-6 login-btm login-text">
                        <!-- Error Message -->
                    </div>
                </div>
            </form>
        </div>
</div>`