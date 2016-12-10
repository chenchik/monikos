<body id="usr_mng_module">
    <script src = '/mvc/public/js/account/accountCtrl.js'></script>

    <div ng-app="myApp" ng-controller="accountCtrl" id="usr_mng_module">
        <div class="wrapper">
            <input id="un" type="text" name="username" placeholder="username">
            <input id="email" type="text" name="email" placeholder="email">
            <input id="pw" type="password" name="password" placeholder="password">
            <select id="school" ng-repeat="x in schoolnames">
                <option selected disabled>select a school</option>
                <option id="a{{x.schoolid}}" value="{{x.schoolid}}">{{x.schoolname}}</option>
            </select>
            <button ng-click="checkUsername()">Create</button>
            <!--
<p>username: {{response.data[0].username}}</p>
<p>email: {{response.data[0].email}}</p>
-->
            <a class="sub-link" ng-click="login()">Back to Login</a>

        </div>
    </div>

    <div id="errorMessage" style="display:none">
        <img id="errorLogo" src="/mvc/public/images/white_logo.png">

        <p class="errorText"></p>

        <div id='errorBtn'><button id="innerErrorBtn" class = "button button5">Okay</button></div>

   </div>
</body>
