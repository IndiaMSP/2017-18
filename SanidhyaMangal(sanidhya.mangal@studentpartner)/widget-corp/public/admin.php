<?php
require_once("../includes/functions.php");
if(!isset($layout_context)) $layout_context ="admin";
include("../includes/layouts/header.php");
?>
        <div id="main">
            <div id="navigation">
                &nbsp;
            </div>
            <div id="page">
                <h2>Admin Menu</h2>
                <p>Welcome to admin area</p>
                <ul class="nav">
                    <li><a href="manage_content.php">Manage Content Pages</a></li>
                    <li><a href="manage_admins.php">Manage Admin Users</a></li>
                    <li><a href="logout.php">Logout</a></li>
                </ul>
            </div>
        </div>
<?php include("../includes/layouts/header.php");
