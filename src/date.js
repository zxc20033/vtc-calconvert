





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-d311c4a37b4a480a760dda55c72eb656b70f39154f15e1b7a7f6506e143d7ec0.css" integrity="sha256-0xHEo3tKSAp2DdpVxy62VrcPORVPFeG3p/ZQbhQ9fsA=" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-d91441e85aab9af121f8064d22f7b52fc2115c55a8d412ab077a776324ea7db0.css" integrity="sha256-2RRB6FqrmvEh+AZNIve1L8IRXFWo1BKrB3p3YyTqfbA=" media="all" rel="stylesheet" />
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>quickstart-php/date.js at master · zxc20033/quickstart-php</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">


  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MTU0MzMwNTAwOjg5NjBhMmU1ZThjMmY1MmY3MzIwNWUxY2UyM2M4ZjhjZWEzMDIxNTI1MzJlZjZkYTM0OTgzNThlZmJjY2QyYjI=--6fa4a2b27026d75ca53e17df20df4fa0839ba709">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="C977:295B:96F73C1:EEFD50C:58A7EB42" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="C977:295B:96F73C1:EEFD50C:58A7EB42" name="octolytics-dimension-request_id" /><meta content="17427308" name="octolytics-actor-id" /><meta content="zxc20033" name="octolytics-actor-login" /><meta content="e6d2792f26b79e43db13e90325e0f3e3ba16478c4d8e45260de7ec8c4fceaea8" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



      <meta name="hostname" content="github.com">
  <meta name="user-login" content="zxc20033">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="MWU5NjczZDFmMTc4ODdkODdmZmYxN2Q0NzQ5M2UyOGZkMDg2ODgzNTAxNGQ1NTg0Zjc1MGU5ZDY4NmY3MWE3Nnx7InJlbW90ZV9hZGRyZXNzIjoiNTguMTUyLjI0My4yMzMiLCJyZXF1ZXN0X2lkIjoiQzk3NzoyOTVCOjk2RjczQzE6RUVGRDUwQzo1OEE3RUI0MiIsInRpbWVzdGFtcCI6MTQ4NzM5OTc1MSwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">


  <meta name="html-safe-nonce" content="e6048a7bd0ca9601c88ae49001ed29f8d38bd6f0">

  <meta http-equiv="x-pjax-version" content="dced5968bf278b1b8283932700604931">
  

    
  <meta name="description" content="quickstart-php - Getting start in Arukas wih PHP">
  <meta name="go-import" content="github.com/zxc20033/quickstart-php git https://github.com/zxc20033/quickstart-php.git">

  <meta content="17427308" name="octolytics-dimension-user_id" /><meta content="zxc20033" name="octolytics-dimension-user_login" /><meta content="82153893" name="octolytics-dimension-repository_id" /><meta content="zxc20033/quickstart-php" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="true" name="octolytics-dimension-repository_is_fork" /><meta content="58441372" name="octolytics-dimension-repository_parent_id" /><meta content="peco8/quickstart-php" name="octolytics-dimension-repository_parent_nwo" /><meta content="58441372" name="octolytics-dimension-repository_network_root_id" /><meta content="peco8/quickstart-php" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/zxc20033/quickstart-php/commits/master.atom" rel="alternate" title="Recent Commits to quickstart-php:master" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/zxc20033/quickstart-php/blob/master/slim/date.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  </head>

  <body class="logged-in env-production windows vis-public fork page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        <div class="header" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/zxc20033/quickstart-php/search" class="js-site-search-form" data-scoped-search-url="/zxc20033/quickstart-php/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav float-left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav float-right" id="user-links">
  <li class="header-nav-item">
    

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="zxc20033/quickstart-php">This repository</span>
  </div>
    <a class="dropdown-item" href="/zxc20033/quickstart-php/settings/collaboration" data-ga-click="Header, create new collaborator">
      New collaborator
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/zxc20033"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@zxc20033" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/17427308?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">zxc20033</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/zxc20033" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/zxc20033?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="YkLmq1sq4mX40PTlEmGzaELknTQP3grb6IeTd+IjUBkniLcUGiST3w4Nm7FVaIv+EQ3NwtgbTUA8wsiUNoGHwg==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>

    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="N/xqGeQsve3eVe3BdMnTdQqbhcsWc01fQ9m+ZL76ApxyNjumpSLMVyiIgpUzwOvjWXLVPcG2CsSXnOWHaljVRw==" /></div>
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
        Sign out
      </button>
</form>
    
  </div>
</div>


      

  </div>

  <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
      <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      


<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="HsaotLs6TQuyDkJghd2Ye0IbtvnILEjtaxjq93iQ4qHdO7dRszTNS2wLnrtPJKgzUjOI/qSTmSItBGN+RDsvnw==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="82153893" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/zxc20033/quickstart-php/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Unwatch
            </span>
          </a>
          <a class="social-count js-social-count"
            href="/zxc20033/quickstart-php/watchers"
            aria-label="1 user is watching this repository">
            1
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/zxc20033/quickstart-php/unstar" class="starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="21WJh05DmpZ98knuwntvp90lJUGqvrsTfHUZ7v78c3N4VThL2e3OpZ312rkWbaLdN2PyqDnt+WXw6RlravJDRw==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar zxc20033/quickstart-php"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/zxc20033/quickstart-php/stargazers"
           aria-label="0 users starred this repository">
          0
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/zxc20033/quickstart-php/star" class="unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="3JC0J4eISak3wZAH316bziaapRKJWn5fFCbrkkMY4Rpl7r4y1jbBUGjSi8RKseNzgKRcX7ukLm35tAfaozETAA==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star zxc20033/quickstart-php"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/zxc20033/quickstart-php/stargazers"
           aria-label="0 users starred this repository">
          0
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/zxc20033/quickstart-php/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="eyCHVMr9cPFYoVTRAmLOpF3yGyZrL6b4rvNRfSGULBsvRcMqOtE4lpxbNSN2BQiNH0wJVmehNK1CtWdcPwCbgQ==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of zxc20033/quickstart-php to your account"
                aria-label="Fork your own copy of zxc20033/quickstart-php to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/zxc20033/quickstart-php/network" class="social-count"
       aria-label="1 user forked this repository">
      1
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
  <span class="author" itemprop="author"><a href="/zxc20033" class="url fn" rel="author">zxc20033</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/zxc20033/quickstart-php" data-pjax="#js-repo-pjax-container">quickstart-php</a></strong>

    <span class="fork-flag">
      <span class="text">forked from <a href="/peco8/quickstart-php">peco8/quickstart-php</a></span>
    </span>
</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/zxc20033/quickstart-php" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /zxc20033/quickstart-php" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>


  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/zxc20033/quickstart-php/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /zxc20033/quickstart-php/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

  <a href="/zxc20033/quickstart-php/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /zxc20033/quickstart-php/projects">
    <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
    Projects
    <span class="counter">0</span>
</a>
    <a href="/zxc20033/quickstart-php/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /zxc20033/quickstart-php/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

  <a href="/zxc20033/quickstart-php/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /zxc20033/quickstart-php/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/zxc20033/quickstart-php/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /zxc20033/quickstart-php/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>
    <a href="/zxc20033/quickstart-php/settings" class="js-selected-navigation-item reponav-item" data-selected-links="repo_settings repo_branch_settings hooks integration_installations /zxc20033/quickstart-php/settings">
      <svg aria-hidden="true" class="octicon octicon-gear" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
      Settings
</a>
</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/zxc20033/quickstart-php/blob/37c9586d555a76303758378101d636d1b874d915/slim/date.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:e9ce11658f42e25f4b7e3941f58d1f79 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Find or create a branch…" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Find or create a branch…">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Find or create a branch…" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/zxc20033/quickstart-php/blob/master/slim/date.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/zxc20033/quickstart-php/branches" class="js-create-branch select-menu-item select-menu-new-item-form js-navigation-item js-new-item-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="JsXio9wC++no6quF1WX534gZo7GjLsLbbAplU7St4C1Pjt1OlaQmakABXYbdwAN8dI4w68p/TeGak3UxJXgKxQ==" /></div>
          <svg aria-hidden="true" class="octicon octicon-git-branch select-menu-item-icon" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
            <div class="select-menu-item-text">
              <span class="select-menu-item-heading">Create branch: <span class="js-new-item-name"></span></span>
              <span class="description">from ‘master’</span>
            </div>
            <input type="hidden" name="name" id="name" class="js-new-item-value">
            <input type="hidden" name="branch" id="branch" value="master">
            <input type="hidden" name="path" id="path" value="slim/date.js">
</form>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/zxc20033/quickstart-php/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/zxc20033/quickstart-php"><span>quickstart-php</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/zxc20033/quickstart-php/tree/master/slim"><span>slim</span></a></span><span class="separator">/</span><strong class="final-path">date.js</strong>
  </div>
</div>

<include-fragment class="commit-tease" src="/zxc20033/quickstart-php/contributors/master/slim/date.js">
  <div>
    Fetching contributors&hellip;
  </div>

  <div class="commit-tease-contributors">
    <img alt="" class="loader-loading float-left" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" />
    <span class="loader-error">Cannot retrieve contributors at this time</span>
  </div>
</include-fragment>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/zxc20033/quickstart-php/raw/master/slim/date.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/zxc20033/quickstart-php/blame/master/slim/date.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/zxc20033/quickstart-php/commits/master/slim/date.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/zxc20033/quickstart-php?branch=master&amp;filepath=slim%2Fdate.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/zxc20033/quickstart-php/edit/master/slim/date.js" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="BBouSZCykAN+/O4RrMerdna6jBfxan8gYMmmuQ5ira8z+xK2F5vfrPiDQtEGADr8ezzlUtlkkDV2zG/GW5eWlg==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Edit this file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
</form>        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/zxc20033/quickstart-php/delete/master/slim/date.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Rpqr2kDbmzXQ4TOKAUOyupUEYA2lhQm/uq5IvwemQWKN67JM4i9UaLIT3EpzkxGX8qmCnPkc+4zXDGJggU1uwA==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Delete this file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      105 lines (104 sloc)
      <span class="file-info-divider"></span>
    25.3 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Version: 1.0 Alpha-1 </span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Build Date: 13-Nov-2007</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Copyright (c) 2006-2007, Coolite Inc. (http://www.coolite.com/). All rights reserved.</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * License: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. </span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Website: http://www.datejs.com/ or http://www.coolite.com/datejs/</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">Date.CultureInfo={name:&quot;en-US&quot;,englishName:&quot;English (United States)&quot;,nativeName:&quot;English (United States)&quot;,dayNames:[&quot;Sunday&quot;,&quot;Monday&quot;,&quot;Tuesday&quot;,&quot;Wednesday&quot;,&quot;Thursday&quot;,&quot;Friday&quot;,&quot;Saturday&quot;],abbreviatedDayNames:[&quot;Sun&quot;,&quot;Mon&quot;,&quot;Tue&quot;,&quot;Wed&quot;,&quot;Thu&quot;,&quot;Fri&quot;,&quot;Sat&quot;],shortestDayNames:[&quot;Su&quot;,&quot;Mo&quot;,&quot;Tu&quot;,&quot;We&quot;,&quot;Th&quot;,&quot;Fr&quot;,&quot;Sa&quot;],firstLetterDayNames:[&quot;S&quot;,&quot;M&quot;,&quot;T&quot;,&quot;W&quot;,&quot;T&quot;,&quot;F&quot;,&quot;S&quot;],monthNames:[&quot;January&quot;,&quot;February&quot;,&quot;March&quot;,&quot;April&quot;,&quot;May&quot;,&quot;June&quot;,&quot;July&quot;,&quot;August&quot;,&quot;September&quot;,&quot;October&quot;,&quot;November&quot;,&quot;December&quot;],abbreviatedMonthNames:[&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;,&quot;Sep&quot;,&quot;Oct&quot;,&quot;Nov&quot;,&quot;Dec&quot;],amDesignator:&quot;AM&quot;,pmDesignator:&quot;PM&quot;,firstDayOfWeek:0,twoDigitYearMax:2029,dateElementOrder:&quot;mdy&quot;,formatPatterns:{shortDate:&quot;M/d/yyyy&quot;,longDate:&quot;dddd, MMMM dd, yyyy&quot;,shortTime:&quot;h:mm tt&quot;,longTime:&quot;h:mm:ss tt&quot;,fullDateTime:&quot;dddd, MMMM dd, yyyy h:mm:ss tt&quot;,sortableDateTime:&quot;yyyy-MM-ddTHH:mm:ss&quot;,universalSortableDateTime:&quot;yyyy-MM-dd HH:mm:ssZ&quot;,rfc1123:&quot;ddd, dd MMM yyyy HH:mm:ss GMT&quot;,monthDay:&quot;MMMM dd&quot;,yearMonth:&quot;MMMM, yyyy&quot;},regexPatterns:{jan:/^jan(uary)?/i,feb:/^feb(ruary)?/i,mar:/^mar(ch)?/i,apr:/^apr(il)?/i,may:/^may/i,jun:/^jun(e)?/i,jul:/^jul(y)?/i,aug:/^aug(ust)?/i,sep:/^sep(t(ember)?)?/i,oct:/^oct(ober)?/i,nov:/^nov(ember)?/i,dec:/^dec(ember)?/i,sun:/^su(n(day)?)?/i,mon:/^mo(n(day)?)?/i,tue:/^tu(e(s(day)?)?)?/i,wed:/^we(d(nesday)?)?/i,thu:/^th(u(r(s(day)?)?)?)?/i,fri:/^fr(i(day)?)?/i,sat:/^sa(t(urday)?)?/i,future:/^next/i,past:/^last|past|prev(ious)?/i,add:/^(\+|after|from)/i,subtract:/^(\-|before|ago)/i,yesterday:/^yesterday/i,today:/^t(oday)?/i,tomorrow:/^tomorrow/i,now:/^n(ow)?/i,millisecond:/^ms|milli(second)?s?/i,second:/^sec(ond)?s?/i,minute:/^min(ute)?s?/i,hour:/^h(ou)?rs?/i,week:/^w(ee)?k/i,month:/^m(o(nth)?s?)?/i,day:/^d(ays?)?/i,year:/^y((ea)?rs?)?/i,shortMeridian:/^(a|p)/i,longMeridian:/^(a\.?m?\.?|p\.?m?\.?)/i,timezone:/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,ordinalSuffix:/^\s*(st|nd|rd|th)/i,timeContext:/^\s*(\:|a|p)/i},abbreviatedTimeZoneStandard:{GMT:&quot;-000&quot;,EST:&quot;-0400&quot;,CST:&quot;-0500&quot;,MST:&quot;-0600&quot;,PST:&quot;-0700&quot;},abbreviatedTimeZoneDST:{GMT:&quot;-000&quot;,EDT:&quot;-0500&quot;,CDT:&quot;-0600&quot;,MDT:&quot;-0700&quot;,PDT:&quot;-0800&quot;}};</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">Date</span>.<span class="pl-en">getMonthNumberFromName</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">name</span>){<span class="pl-k">var</span> n<span class="pl-k">=</span><span class="pl-c1">Date</span>.<span class="pl-smi">CultureInfo</span>.<span class="pl-smi">monthNames</span>,m<span class="pl-k">=</span><span class="pl-c1">Date</span>.<span class="pl-smi">CultureInfo</span>.<span class="pl-smi">abbreviatedMonthNames</span>,s<span class="pl-k">=</span><span class="pl-smi">name</span>.<span class="pl-c1">toLowerCase</span>();<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">n</span>.<span class="pl-c1">length</span>;i<span class="pl-k">++</span>){<span class="pl-k">if</span>(n[i].<span class="pl-c1">toLowerCase</span>()<span class="pl-k">==</span>s<span class="pl-k">||</span>m[i].<span class="pl-c1">toLowerCase</span>()<span class="pl-k">==</span>s){<span class="pl-k">return</span> i;}}</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span><span class="pl-k">-</span><span class="pl-c1">1</span>;};<span class="pl-c1">Date</span>.<span class="pl-en">getDayNumberFromName</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">name</span>){<span class="pl-k">var</span> n<span class="pl-k">=</span><span class="pl-c1">Date</span>.<span class="pl-smi">CultureInfo</span>.<span class="pl-smi">dayNames</span>,m<span class="pl-k">=</span><span class="pl-c1">Date</span>.<span class="pl-smi">CultureInfo</span>.<span class="pl-smi">abbreviatedDayNames</span>,o<span class="pl-k">=</span><span class="pl-c1">Date</span>.<span class="pl-smi">CultureInfo</span>.<span class="pl-smi">shortestDayNames</span>,s<span class="pl-k">=</span><span class="pl-smi">name</span>.<span class="pl-c1">toLowerCase</span>();<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">n</span>.<span class="pl-c1">length</span>;i<span class="pl-k">++</span>){<span class="pl-k">if</span>(n[i].<span class="pl-c1">toLowerCase</span>()<span class="pl-k">==</span>s<span class="pl-k">||</span>m[i].<span class="pl-c1">toLowerCase</span>()<span class="pl-k">==</span>s){<span class="pl-k">return</span> i;}}</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span><span class="pl-k">-</span><span class="pl-c1">1</span>;};<span class="pl-c1">Date</span>.<span class="pl-en">isLeapYear</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">year</span>){<span class="pl-k">return</span>(((year<span class="pl-k">%</span><span class="pl-c1">4</span><span class="pl-k">===</span><span class="pl-c1">0</span>)<span class="pl-k">&amp;&amp;</span>(year<span class="pl-k">%</span><span class="pl-c1">100</span><span class="pl-k">!==</span><span class="pl-c1">0</span>))<span class="pl-k">||</span>(year<span class="pl-k">%</span><span class="pl-c1">400</span><span class="pl-k">===</span><span class="pl-c1">0</span>));};<span class="pl-c1">Date</span>.<span class="pl-en">getDaysInMonth</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">year</span>,<span class="pl-smi">month</span>){<span class="pl-k">return</span>[<span class="pl-c1">31</span>,(<span class="pl-c1">Date</span>.<span class="pl-en">isLeapYear</span>(year)<span class="pl-k">?</span><span class="pl-c1">29</span><span class="pl-k">:</span><span class="pl-c1">28</span>),<span class="pl-c1">31</span>,<span class="pl-c1">30</span>,<span class="pl-c1">31</span>,<span class="pl-c1">30</span>,<span class="pl-c1">31</span>,<span class="pl-c1">31</span>,<span class="pl-c1">30</span>,<span class="pl-c1">31</span>,<span class="pl-c1">30</span>,<span class="pl-c1">31</span>][month];};<span class="pl-c1">Date</span>.<span class="pl-en">getTimezoneOffset</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">s</span>,<span class="pl-smi">dst</span>){<span class="pl-k">return</span>(dst<span class="pl-k">||</span><span class="pl-c1">false</span>)<span class="pl-k">?</span><span class="pl-c1">Date</span>.<span class="pl-smi">CultureInfo</span>.<span class="pl-smi">abbreviatedTimeZoneDST</span>[<span class="pl-smi">s</span>.<span class="pl-c1">toUpperCase</span>()]<span class="pl-k">:</span><span class="pl-c1">Date</span>.<span class="pl-smi">CultureInfo</span>.<span class="pl-smi">abbreviatedTimeZoneStandard</span>[<span class="pl-smi">s</span>.<span class="pl-c1">toUpperCase</span>()];};<span class="pl-c1">Date</span>.<span class="pl-en">getTimezoneAbbreviation</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">offset</span>,<span class="pl-smi">dst</span>){<span class="pl-k">var</span> n<span class="pl-k">=</span>(dst<span class="pl-k">||</span><span class="pl-c1">false</span>)<span class="pl-k">?</span><span class="pl-c1">Date</span>.<span class="pl-smi">CultureInfo</span>.<span class="pl-smi">abbreviatedTimeZoneDST</span><span class="pl-k">:</span><span class="pl-c1">Date</span>.<span class="pl-smi">CultureInfo</span>.<span class="pl-smi">abbreviatedTimeZoneStandard</span>,p;<span class="pl-k">for</span>(p <span class="pl-k">in</span> n){<span class="pl-k">if</span>(n[p]<span class="pl-k">===</span>offset){<span class="pl-k">return</span> p;}}</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">null</span>;};<span class="pl-c1">Date</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">clone</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">this</span>.<span class="pl-c1">getTime</span>());};<span class="pl-c1">Date</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">compareTo</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">date</span>){<span class="pl-k">if</span>(<span class="pl-c1">isNaN</span>(<span class="pl-c1">this</span>)){<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-c1">this</span>);}</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">if(date instanceof Date&amp;&amp;!isNaN(date)){return(this&gt;date)?1:(this&lt;date)?-1:0;}else{throw new TypeError(date);}};Date.prototype.equals=function(date){return(this.compareTo(date)===0);};Date.prototype.between=function(start,end){var t=this.getTime();return t&gt;=start.getTime()&amp;&amp;t&lt;=end.getTime();};Date.prototype.addMilliseconds=function(value){this.setMilliseconds(this.getMilliseconds()+value);return this;};Date.prototype.addSeconds=function(value){return this.addMilliseconds(value*1000);};Date.prototype.addMinutes=function(value){return this.addMilliseconds(value*60000);};Date.prototype.addHours=function(value){return this.addMilliseconds(value*3600000);};Date.prototype.addDays=function(value){return this.addMilliseconds(value*86400000);};Date.prototype.addWeeks=function(value){return this.addMilliseconds(value*604800000);};Date.prototype.addMonths=function(value){var n=this.getDate();this.setDate(1);this.setMonth(this.getMonth()+value);this.setDate(Math.min(n,this.getDaysInMonth()));return this;};Date.prototype.addYears=function(value){return this.addMonths(value*12);};Date.prototype.add=function(config){if(typeof config==&quot;number&quot;){this._orient=config;return this;}</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> x<span class="pl-k">=</span>config;<span class="pl-k">if</span>(<span class="pl-smi">x</span>.<span class="pl-smi">millisecond</span><span class="pl-k">||</span><span class="pl-smi">x</span>.<span class="pl-smi">milliseconds</span>){<span class="pl-c1">this</span>.<span class="pl-en">addMilliseconds</span>(<span class="pl-smi">x</span>.<span class="pl-smi">millisecond</span><span class="pl-k">||</span><span class="pl-smi">x</span>.<span class="pl-smi">milliseconds</span>);}</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">x</span>.<span class="pl-smi">second</span><span class="pl-k">||</span><span class="pl-smi">x</span>.<span class="pl-smi">seconds</span>){<span class="pl-c1">this</span>.<span class="pl-en">addSeconds</span>(<span class="pl-smi">x</span>.<span class="pl-smi">second</span><span class="pl-k">||</span><span class="pl-smi">x</span>.<span class="pl-smi">seconds</span>);}</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">x</span>.<span class="pl-smi">minute</span><span class="pl-k">||</span><span class="pl-smi">x</span>.<span class="pl-smi">minutes</span>){<span class="pl-c1">this</span>.<span class="pl-en">addMinutes</span>(<span class="pl-smi">x</span>.<span class="pl-smi">minute</span><span class="pl-k">||</span><span class="pl-smi">x</span>.<span class="pl-smi">minutes</span>);}</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">x</span>.<span class="pl-smi">hour</span><span class="pl-k">||</span><span class="pl-smi">x</span>.<span class="pl-smi">hours</span>){<span class="pl-c1">this</span>.<span class="pl-en">addHours</span>(<span class="pl-smi">x</span>.<span class="pl-smi">hour</span><span class="pl-k">||</span><span class="pl-smi">x</span>.<span class="pl-smi">hours</span>);}</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">x</span>.<span class="pl-smi">month</span><span class="pl-k">||</span><span class="pl-smi">x</span>.<span class="pl-smi">months</span>){<span class="pl-c1">this</span>.<span class="pl-en">addMonths</span>(<span class="pl-smi">x</span>.<span class="pl-smi">month</span><span class="pl-k">||</span><span class="pl-smi">x</span>.<span class="pl-smi">months</span>);}</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">x</span>.<span class="pl-smi">year</span><span class="pl-k">||</span><span class="pl-smi">x</span>.<span class="pl-smi">years</span>){<span class="pl-c1">this</span>.<span class="pl-en">addYears</span>(<span class="pl-smi">x</span>.<span class="pl-smi">year</span><span class="pl-k">||</span><span class="pl-smi">x</span>.<span class="pl-smi">years</span>);}</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">x</span>.<span class="pl-smi">day</span><span class="pl-k">||</span><span class="pl-smi">x</span>.<span class="pl-smi">days</span>){<span class="pl-c1">this</span>.<span class="pl-en">addDays</span>(<span class="pl-smi">x</span>.<span class="pl-smi">day</span><span class="pl-k">||</span><span class="pl-smi">x</span>.<span class="pl-smi">days</span>);}</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>;};<span class="pl-c1">Date</span>.<span class="pl-en">_validate</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">value</span>,<span class="pl-smi">min</span>,<span class="pl-smi">max</span>,<span class="pl-smi">name</span>){<span class="pl-k">if</span>(<span class="pl-k">typeof</span> value<span class="pl-k">!=</span><span class="pl-s"><span class="pl-pds">&quot;</span>number<span class="pl-pds">&quot;</span></span>){<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">TypeError</span>(value<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span> is not a Number.<span class="pl-pds">&quot;</span></span>);}<span class="pl-k">else</span> <span class="pl-k">if</span>(value<span class="pl-k">&lt;</span>min<span class="pl-k">||</span>value<span class="pl-k">&gt;</span>max){<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">RangeError</span>(value<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span> is not a valid value for <span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>name<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span>);}</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">true</span>;};<span class="pl-c1">Date</span>.<span class="pl-en">validateMillisecond</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">n</span>){<span class="pl-k">return</span> <span class="pl-c1">Date</span>.<span class="pl-en">_validate</span>(n,<span class="pl-c1">0</span>,<span class="pl-c1">999</span>,<span class="pl-s"><span class="pl-pds">&quot;</span>milliseconds<span class="pl-pds">&quot;</span></span>);};<span class="pl-c1">Date</span>.<span class="pl-en">validateSecond</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">n</span>){<span class="pl-k">return</span> <span class="pl-c1">Date</span>.<span class="pl-en">_validate</span>(n,<span class="pl-c1">0</span>,<span class="pl-c1">59</span>,<span class="pl-s"><span class="pl-pds">&quot;</span>seconds<span class="pl-pds">&quot;</span></span>);};<span class="pl-c1">Date</span>.<span class="pl-en">validateMinute</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">n</span>){<span class="pl-k">return</span> <span class="pl-c1">Date</span>.<span class="pl-en">_validate</span>(n,<span class="pl-c1">0</span>,<span class="pl-c1">59</span>,<span class="pl-s"><span class="pl-pds">&quot;</span>minutes<span class="pl-pds">&quot;</span></span>);};<span class="pl-c1">Date</span>.<span class="pl-en">validateHour</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">n</span>){<span class="pl-k">return</span> <span class="pl-c1">Date</span>.<span class="pl-en">_validate</span>(n,<span class="pl-c1">0</span>,<span class="pl-c1">23</span>,<span class="pl-s"><span class="pl-pds">&quot;</span>hours<span class="pl-pds">&quot;</span></span>);};<span class="pl-c1">Date</span>.<span class="pl-en">validateDay</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">n</span>,<span class="pl-smi">year</span>,<span class="pl-smi">month</span>){<span class="pl-k">return</span> <span class="pl-c1">Date</span>.<span class="pl-en">_validate</span>(n,<span class="pl-c1">1</span>,<span class="pl-c1">Date</span>.<span class="pl-en">getDaysInMonth</span>(year,month),<span class="pl-s"><span class="pl-pds">&quot;</span>days<span class="pl-pds">&quot;</span></span>);};<span class="pl-c1">Date</span>.<span class="pl-en">validateMonth</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">n</span>){<span class="pl-k">return</span> <span class="pl-c1">Date</span>.<span class="pl-en">_validate</span>(n,<span class="pl-c1">0</span>,<span class="pl-c1">11</span>,<span class="pl-s"><span class="pl-pds">&quot;</span>months<span class="pl-pds">&quot;</span></span>);};<span class="pl-c1">Date</span>.<span class="pl-en">validateYear</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">n</span>){<span class="pl-k">return</span> <span class="pl-c1">Date</span>.<span class="pl-en">_validate</span>(n,<span class="pl-c1">1</span>,<span class="pl-c1">9999</span>,<span class="pl-s"><span class="pl-pds">&quot;</span>seconds<span class="pl-pds">&quot;</span></span>);};<span class="pl-c1">Date</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">set</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">config</span>){<span class="pl-k">var</span> x<span class="pl-k">=</span>config;<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">x</span>.<span class="pl-smi">millisecond</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">x</span>.<span class="pl-smi">millisecond</span><span class="pl-k">!==</span><span class="pl-c1">0</span>){<span class="pl-smi">x</span>.<span class="pl-smi">millisecond</span><span class="pl-k">=</span><span class="pl-k">-</span><span class="pl-c1">1</span>;}</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">x</span>.<span class="pl-smi">second</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">x</span>.<span class="pl-smi">second</span><span class="pl-k">!==</span><span class="pl-c1">0</span>){<span class="pl-smi">x</span>.<span class="pl-smi">second</span><span class="pl-k">=</span><span class="pl-k">-</span><span class="pl-c1">1</span>;}</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">x</span>.<span class="pl-smi">minute</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">x</span>.<span class="pl-smi">minute</span><span class="pl-k">!==</span><span class="pl-c1">0</span>){<span class="pl-smi">x</span>.<span class="pl-smi">minute</span><span class="pl-k">=</span><span class="pl-k">-</span><span class="pl-c1">1</span>;}</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">x</span>.<span class="pl-smi">hour</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">x</span>.<span class="pl-smi">hour</span><span class="pl-k">!==</span><span class="pl-c1">0</span>){<span class="pl-smi">x</span>.<span class="pl-smi">hour</span><span class="pl-k">=</span><span class="pl-k">-</span><span class="pl-c1">1</span>;}</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">x</span>.<span class="pl-smi">day</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">x</span>.<span class="pl-smi">day</span><span class="pl-k">!==</span><span class="pl-c1">0</span>){<span class="pl-smi">x</span>.<span class="pl-smi">day</span><span class="pl-k">=</span><span class="pl-k">-</span><span class="pl-c1">1</span>;}</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">x</span>.<span class="pl-smi">month</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">x</span>.<span class="pl-smi">month</span><span class="pl-k">!==</span><span class="pl-c1">0</span>){<span class="pl-smi">x</span>.<span class="pl-smi">month</span><span class="pl-k">=</span><span class="pl-k">-</span><span class="pl-c1">1</span>;}</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">x</span>.<span class="pl-smi">year</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">x</span>.<span class="pl-smi">year</span><span class="pl-k">!==</span><span class="pl-c1">0</span>){<span class="pl-smi">x</span>.<span class="pl-smi">year</span><span class="pl-k">=</span><span class="pl-k">-</span><span class="pl-c1">1</span>;}</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">x</span>.<span class="pl-smi">millisecond</span><span class="pl-k">!=</span><span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">Date</span>.<span class="pl-en">validateMillisecond</span>(<span class="pl-smi">x</span>.<span class="pl-smi">millisecond</span>)){<span class="pl-c1">this</span>.<span class="pl-en">addMilliseconds</span>(<span class="pl-smi">x</span>.<span class="pl-smi">millisecond</span><span class="pl-k">-</span><span class="pl-c1">this</span>.<span class="pl-c1">getMilliseconds</span>());}</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">x</span>.<span class="pl-smi">second</span><span class="pl-k">!=</span><span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">Date</span>.<span class="pl-en">validateSecond</span>(<span class="pl-smi">x</span>.<span class="pl-smi">second</span>)){<span class="pl-c1">this</span>.<span class="pl-en">addSeconds</span>(<span class="pl-smi">x</span>.<span class="pl-smi">second</span><span class="pl-k">-</span><span class="pl-c1">this</span>.<span class="pl-c1">getSeconds</span>());}</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">x</span>.<span class="pl-smi">minute</span><span class="pl-k">!=</span><span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">Date</span>.<span class="pl-en">validateMinute</span>(<span class="pl-smi">x</span>.<span class="pl-smi">minute</span>)){<span class="pl-c1">this</span>.<span class="pl-en">addMinutes</span>(<span class="pl-smi">x</span>.<span class="pl-smi">minute</span><span class="pl-k">-</span><span class="pl-c1">this</span>.<span class="pl-c1">getMinutes</span>());}</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">x</span>.<span class="pl-smi">hour</span><span class="pl-k">!=</span><span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">Date</span>.<span class="pl-en">validateHour</span>(<span class="pl-smi">x</span>.<span class="pl-smi">hour</span>)){<span class="pl-c1">this</span>.<span class="pl-en">addHours</span>(<span class="pl-smi">x</span>.<span class="pl-smi">hour</span><span class="pl-k">-</span><span class="pl-c1">this</span>.<span class="pl-c1">getHours</span>());}</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">x</span>.<span class="pl-smi">month</span><span class="pl-k">!==</span><span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">Date</span>.<span class="pl-en">validateMonth</span>(<span class="pl-smi">x</span>.<span class="pl-smi">month</span>)){<span class="pl-c1">this</span>.<span class="pl-en">addMonths</span>(<span class="pl-smi">x</span>.<span class="pl-smi">month</span><span class="pl-k">-</span><span class="pl-c1">this</span>.<span class="pl-c1">getMonth</span>());}</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">x</span>.<span class="pl-smi">year</span><span class="pl-k">!=</span><span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">Date</span>.<span class="pl-en">validateYear</span>(<span class="pl-smi">x</span>.<span class="pl-smi">year</span>)){<span class="pl-c1">this</span>.<span class="pl-en">addYears</span>(<span class="pl-smi">x</span>.<span class="pl-smi">year</span><span class="pl-k">-</span><span class="pl-c1">this</span>.<span class="pl-c1">getFullYear</span>());}</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">x</span>.<span class="pl-smi">day</span><span class="pl-k">!=</span><span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">Date</span>.<span class="pl-en">validateDay</span>(<span class="pl-smi">x</span>.<span class="pl-smi">day</span>,<span class="pl-c1">this</span>.<span class="pl-c1">getFullYear</span>(),<span class="pl-c1">this</span>.<span class="pl-c1">getMonth</span>())){<span class="pl-c1">this</span>.<span class="pl-en">addDays</span>(<span class="pl-smi">x</span>.<span class="pl-smi">day</span><span class="pl-k">-</span><span class="pl-c1">this</span>.<span class="pl-c1">getDate</span>());}</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">x</span>.<span class="pl-smi">timezone</span>){<span class="pl-c1">this</span>.<span class="pl-en">setTimezone</span>(<span class="pl-smi">x</span>.<span class="pl-smi">timezone</span>);}</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-smi">x</span>.<span class="pl-smi">timezoneOffset</span>){<span class="pl-c1">this</span>.<span class="pl-en">setTimezoneOffset</span>(<span class="pl-smi">x</span>.<span class="pl-smi">timezoneOffset</span>);}</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">return this;};Date.prototype.clearTime=function(){this.setHours(0);this.setMinutes(0);this.setSeconds(0);this.setMilliseconds(0);return this;};Date.prototype.isLeapYear=function(){var y=this.getFullYear();return(((y%4===0)&amp;&amp;(y%100!==0))||(y%400===0));};Date.prototype.isWeekday=function(){return!(this.is().sat()||this.is().sun());};Date.prototype.getDaysInMonth=function(){return Date.getDaysInMonth(this.getFullYear(),this.getMonth());};Date.prototype.moveToFirstDayOfMonth=function(){return this.set({day:1});};Date.prototype.moveToLastDayOfMonth=function(){return this.set({day:this.getDaysInMonth()});};Date.prototype.moveToDayOfWeek=function(day,orient){var diff=(day-this.getDay()+7*(orient||+1))%7;return this.addDays((diff===0)?diff+=7*(orient||+1):diff);};Date.prototype.moveToMonth=function(month,orient){var diff=(month-this.getMonth()+12*(orient||+1))%12;return this.addMonths((diff===0)?diff+=12*(orient||+1):diff);};Date.prototype.getDayOfYear=function(){return Math.floor((this-new Date(this.getFullYear(),0,1))/86400000);};Date.prototype.getWeekOfYear=function(firstDayOfWeek){var y=this.getFullYear(),m=this.getMonth(),d=this.getDate();var dow=firstDayOfWeek||Date.CultureInfo.firstDayOfWeek;var offset=7+1-new Date(y,0,1).getDay();if(offset==8){offset=1;}</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> daynum<span class="pl-k">=</span>((<span class="pl-c1">Date</span>.<span class="pl-c1">UTC</span>(y,m,d,<span class="pl-c1">0</span>,<span class="pl-c1">0</span>,<span class="pl-c1">0</span>)<span class="pl-k">-</span><span class="pl-c1">Date</span>.<span class="pl-c1">UTC</span>(y,<span class="pl-c1">0</span>,<span class="pl-c1">1</span>,<span class="pl-c1">0</span>,<span class="pl-c1">0</span>,<span class="pl-c1">0</span>))<span class="pl-k">/</span><span class="pl-c1">86400000</span>)<span class="pl-k">+</span><span class="pl-c1">1</span>;<span class="pl-k">var</span> w<span class="pl-k">=</span><span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>((daynum<span class="pl-k">-</span>offset<span class="pl-k">+</span><span class="pl-c1">7</span>)<span class="pl-k">/</span><span class="pl-c1">7</span>);<span class="pl-k">if</span>(w<span class="pl-k">===</span>dow){y<span class="pl-k">--</span>;<span class="pl-k">var</span> prevOffset<span class="pl-k">=</span><span class="pl-c1">7</span><span class="pl-k">+</span><span class="pl-c1">1</span><span class="pl-k">-</span><span class="pl-k">new</span> <span class="pl-en">Date</span>(y,<span class="pl-c1">0</span>,<span class="pl-c1">1</span>).<span class="pl-c1">getDay</span>();<span class="pl-k">if</span>(prevOffset<span class="pl-k">==</span><span class="pl-c1">2</span><span class="pl-k">||</span>prevOffset<span class="pl-k">==</span><span class="pl-c1">8</span>){w<span class="pl-k">=</span><span class="pl-c1">53</span>;}<span class="pl-k">else</span>{w<span class="pl-k">=</span><span class="pl-c1">52</span>;}}</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">return w;};Date.prototype.isDST=function(){console.log(&#39;isDST&#39;);return this.toString().match(/(E|C|M|P)(S|D)T/)[2]==&quot;D&quot;;};Date.prototype.getTimezone=function(){return Date.getTimezoneAbbreviation(this.getUTCOffset,this.isDST());};Date.prototype.setTimezoneOffset=function(s){var here=this.getTimezoneOffset(),there=Number(s)*-6/10;this.addMinutes(there-here);return this;};Date.prototype.setTimezone=function(s){return this.setTimezoneOffset(Date.getTimezoneOffset(s));};Date.prototype.getUTCOffset=function(){var n=this.getTimezoneOffset()*-10/6,r;if(n&lt;0){r=(n-10000).toString();return r[0]+r.substr(2);}else{r=(n+10000).toString();return&quot;+&quot;+r.substr(1);}};Date.prototype.getDayName=function(abbrev){return abbrev?Date.CultureInfo.abbreviatedDayNames[this.getDay()]:Date.CultureInfo.dayNames[this.getDay()];};Date.prototype.getMonthName=function(abbrev){return abbrev?Date.CultureInfo.abbreviatedMonthNames[this.getMonth()]:Date.CultureInfo.monthNames[this.getMonth()];};Date.prototype._toString=Date.prototype.toString;Date.prototype.toString=function(format){var self=this;var p=function p(s){return(s.toString().length==1)?&quot;0&quot;+s:s;};return format?format.replace(/dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?/g,function(format){switch(format){case&quot;hh&quot;:return p(self.getHours()&lt;13?self.getHours():(self.getHours()-12));case&quot;h&quot;:return self.getHours()&lt;13?self.getHours():(self.getHours()-12);case&quot;HH&quot;:return p(self.getHours());case&quot;H&quot;:return self.getHours();case&quot;mm&quot;:return p(self.getMinutes());case&quot;m&quot;:return self.getMinutes();case&quot;ss&quot;:return p(self.getSeconds());case&quot;s&quot;:return self.getSeconds();case&quot;yyyy&quot;:return self.getFullYear();case&quot;yy&quot;:return self.getFullYear().toString().substring(2,4);case&quot;dddd&quot;:return self.getDayName();case&quot;ddd&quot;:return self.getDayName(true);case&quot;dd&quot;:return p(self.getDate());case&quot;d&quot;:return self.getDate().toString();case&quot;MMMM&quot;:return self.getMonthName();case&quot;MMM&quot;:return self.getMonthName(true);case&quot;MM&quot;:return p((self.getMonth()+1));case&quot;M&quot;:return self.getMonth()+1;case&quot;t&quot;:return self.getHours()&lt;12?Date.CultureInfo.amDesignator.substring(0,1):Date.CultureInfo.pmDesignator.substring(0,1);case&quot;tt&quot;:return self.getHours()&lt;12?Date.CultureInfo.amDesignator:Date.CultureInfo.pmDesignator;case&quot;zzz&quot;:case&quot;zz&quot;:case&quot;z&quot;:return&quot;&quot;;}}):this._toString();};</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">Date</span>.<span class="pl-en">now</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>();};<span class="pl-c1">Date</span>.<span class="pl-en">today</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-c1">Date</span>.<span class="pl-en">now</span>().<span class="pl-en">clearTime</span>();};<span class="pl-c1">Date</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">_orient</span><span class="pl-k">=</span><span class="pl-k">+</span><span class="pl-c1">1</span>;<span class="pl-c1">Date</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">next</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-c1">this</span>.<span class="pl-smi">_orient</span><span class="pl-k">=</span><span class="pl-k">+</span><span class="pl-c1">1</span>;<span class="pl-k">return</span> <span class="pl-c1">this</span>;};<span class="pl-c1">Date</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">last</span><span class="pl-k">=</span><span class="pl-c1">Date</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">prev</span><span class="pl-k">=</span><span class="pl-c1">Date</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">previous</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-c1">this</span>.<span class="pl-smi">_orient</span><span class="pl-k">=</span><span class="pl-k">-</span><span class="pl-c1">1</span>;<span class="pl-k">return</span> <span class="pl-c1">this</span>;};<span class="pl-c1">Date</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">_is</span><span class="pl-k">=</span><span class="pl-c1">false</span>;<span class="pl-c1">Date</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">is</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-c1">this</span>.<span class="pl-smi">_is</span><span class="pl-k">=</span><span class="pl-c1">true</span>;<span class="pl-k">return</span> <span class="pl-c1">this</span>;};<span class="pl-c1">Number</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">_dateElement</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>day<span class="pl-pds">&quot;</span></span>;<span class="pl-c1">Number</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">fromNow</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> c<span class="pl-k">=</span>{};c[<span class="pl-c1">this</span>.<span class="pl-smi">_dateElement</span>]<span class="pl-k">=</span><span class="pl-c1">this</span>;<span class="pl-k">return</span> <span class="pl-c1">Date</span>.<span class="pl-en">now</span>().<span class="pl-c1">add</span>(c);};<span class="pl-c1">Number</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">ago</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> c<span class="pl-k">=</span>{};c[<span class="pl-c1">this</span>.<span class="pl-smi">_dateElement</span>]<span class="pl-k">=</span><span class="pl-c1">this</span><span class="pl-k">*-</span><span class="pl-c1">1</span>;<span class="pl-k">return</span> <span class="pl-c1">Date</span>.<span class="pl-en">now</span>().<span class="pl-c1">add</span>(c);};(<span class="pl-k">function</span>(){<span class="pl-k">var</span> <span class="pl-c1">$D</span><span class="pl-k">=</span><span class="pl-c1">Date</span>.<span class="pl-c1">prototype</span>,<span class="pl-c1">$N</span><span class="pl-k">=</span><span class="pl-c1">Number</span>.<span class="pl-c1">prototype</span>;<span class="pl-k">var</span> dx<span class="pl-k">=</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>sunday monday tuesday wednesday thursday friday saturday<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-pds">/</span></span>),mx<span class="pl-k">=</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>january february march april may june july august september october november december<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-pds">/</span></span>),px<span class="pl-k">=</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Millisecond Second Minute Hour Day Week Month Year<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-pds">/</span></span>),de;<span class="pl-k">var</span> <span class="pl-en">df</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">n</span>){<span class="pl-k">return</span> <span class="pl-k">function</span>(){<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">_is</span>){<span class="pl-c1">this</span>.<span class="pl-smi">_is</span><span class="pl-k">=</span><span class="pl-c1">false</span>;<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-c1">getDay</span>()<span class="pl-k">==</span>n;}</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">moveToDayOfWeek</span>(n,<span class="pl-c1">this</span>.<span class="pl-smi">_orient</span>);};};<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">dx</span>.<span class="pl-c1">length</span>;i<span class="pl-k">++</span>){<span class="pl-c1">$D</span>[dx[i]]<span class="pl-k">=</span><span class="pl-c1">$D</span>[dx[i].<span class="pl-c1">substring</span>(<span class="pl-c1">0</span>,<span class="pl-c1">3</span>)]<span class="pl-k">=</span><span class="pl-en">df</span>(i);}</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-en">mf</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">n</span>){<span class="pl-k">return</span> <span class="pl-k">function</span>(){<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">_is</span>){<span class="pl-c1">this</span>.<span class="pl-smi">_is</span><span class="pl-k">=</span><span class="pl-c1">false</span>;<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-c1">getMonth</span>()<span class="pl-k">===</span>n;}</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">moveToMonth</span>(n,<span class="pl-c1">this</span>.<span class="pl-smi">_orient</span>);};};<span class="pl-k">for</span>(<span class="pl-k">var</span> j<span class="pl-k">=</span><span class="pl-c1">0</span>;j<span class="pl-k">&lt;</span><span class="pl-smi">mx</span>.<span class="pl-c1">length</span>;j<span class="pl-k">++</span>){<span class="pl-c1">$D</span>[mx[j]]<span class="pl-k">=</span><span class="pl-c1">$D</span>[mx[j].<span class="pl-c1">substring</span>(<span class="pl-c1">0</span>,<span class="pl-c1">3</span>)]<span class="pl-k">=</span><span class="pl-en">mf</span>(j);}</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-en">ef</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">j</span>){<span class="pl-k">return</span> <span class="pl-k">function</span>(){<span class="pl-k">if</span>(<span class="pl-smi">j</span>.<span class="pl-c1">substring</span>(<span class="pl-smi">j</span>.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>)<span class="pl-k">!=</span><span class="pl-s"><span class="pl-pds">&quot;</span>s<span class="pl-pds">&quot;</span></span>){j<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&quot;</span>s<span class="pl-pds">&quot;</span></span>;}</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-c1">this</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>add<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>j](<span class="pl-c1">this</span>.<span class="pl-smi">_orient</span>);};};<span class="pl-k">var</span> <span class="pl-en">nf</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">n</span>){<span class="pl-k">return</span> <span class="pl-k">function</span>(){<span class="pl-c1">this</span>.<span class="pl-smi">_dateElement</span><span class="pl-k">=</span>n;<span class="pl-k">return</span> <span class="pl-c1">this</span>;};};<span class="pl-k">for</span>(<span class="pl-k">var</span> k<span class="pl-k">=</span><span class="pl-c1">0</span>;k<span class="pl-k">&lt;</span><span class="pl-smi">px</span>.<span class="pl-c1">length</span>;k<span class="pl-k">++</span>){de<span class="pl-k">=</span>px[k].<span class="pl-c1">toLowerCase</span>();<span class="pl-c1">$D</span>[de]<span class="pl-k">=</span><span class="pl-c1">$D</span>[de<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>s<span class="pl-pds">&quot;</span></span>]<span class="pl-k">=</span><span class="pl-en">ef</span>(px[k]);<span class="pl-c1">$N</span>[de]<span class="pl-k">=</span><span class="pl-c1">$N</span>[de<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>s<span class="pl-pds">&quot;</span></span>]<span class="pl-k">=</span><span class="pl-en">nf</span>(de);}}());<span class="pl-c1">Date</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">toJSONString</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-c1">toString</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>yyyy-MM-ddThh:mm:ssZ<span class="pl-pds">&quot;</span></span>);};<span class="pl-c1">Date</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">toShortDateString</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-c1">toString</span>(<span class="pl-c1">Date</span>.<span class="pl-smi">CultureInfo</span>.<span class="pl-smi">formatPatterns</span>.<span class="pl-smi">shortDatePattern</span>);};<span class="pl-c1">Date</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">toLongDateString</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-c1">toString</span>(<span class="pl-c1">Date</span>.<span class="pl-smi">CultureInfo</span>.<span class="pl-smi">formatPatterns</span>.<span class="pl-smi">longDatePattern</span>);};<span class="pl-c1">Date</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">toShortTimeString</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-c1">toString</span>(<span class="pl-c1">Date</span>.<span class="pl-smi">CultureInfo</span>.<span class="pl-smi">formatPatterns</span>.<span class="pl-smi">shortTimePattern</span>);};<span class="pl-c1">Date</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">toLongTimeString</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-c1">toString</span>(<span class="pl-c1">Date</span>.<span class="pl-smi">CultureInfo</span>.<span class="pl-smi">formatPatterns</span>.<span class="pl-smi">longTimePattern</span>);};<span class="pl-c1">Date</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">getOrdinal</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">switch</span>(<span class="pl-c1">this</span>.<span class="pl-c1">getDate</span>()){<span class="pl-k">case</span> <span class="pl-c1">1</span>:<span class="pl-k">case</span> <span class="pl-c1">21</span>:<span class="pl-k">case</span> <span class="pl-c1">31</span>:<span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&quot;</span>st<span class="pl-pds">&quot;</span></span>;<span class="pl-k">case</span> <span class="pl-c1">2</span>:<span class="pl-k">case</span> <span class="pl-c1">22</span>:<span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&quot;</span>nd<span class="pl-pds">&quot;</span></span>;<span class="pl-k">case</span> <span class="pl-c1">3</span>:<span class="pl-k">case</span> <span class="pl-c1">23</span>:<span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&quot;</span>rd<span class="pl-pds">&quot;</span></span>;<span class="pl-k">default</span>:<span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&quot;</span>th<span class="pl-pds">&quot;</span></span>;}};</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(){<span class="pl-c1">Date</span>.<span class="pl-smi">Parsing</span><span class="pl-k">=</span>{<span class="pl-en">Exception</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">s</span>){<span class="pl-c1">this</span>.<span class="pl-smi">message</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>Parse error at &#39;<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-smi">s</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">0</span>,<span class="pl-c1">10</span>)<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span> ...&#39;<span class="pl-pds">&quot;</span></span>;}};<span class="pl-k">var</span> <span class="pl-c1">$P</span><span class="pl-k">=</span><span class="pl-c1">Date</span>.<span class="pl-smi">Parsing</span>;<span class="pl-k">var</span> _<span class="pl-k">=</span><span class="pl-smi">$P</span>.<span class="pl-smi">Operators</span><span class="pl-k">=</span>{<span class="pl-en">rtoken</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">r</span>){<span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">s</span>){<span class="pl-k">var</span> mx<span class="pl-k">=</span><span class="pl-smi">s</span>.<span class="pl-c1">match</span>(r);<span class="pl-k">if</span>(mx){<span class="pl-k">return</span>([mx[<span class="pl-c1">0</span>],<span class="pl-smi">s</span>.<span class="pl-c1">substring</span>(mx[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>)]);}<span class="pl-k">else</span>{<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">$P.Exception</span>(s);}};},<span class="pl-en">token</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">s</span>){<span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">s</span>){<span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">rtoken</span>(<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>^<span class="pl-cce">\s</span>*<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>s<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\s</span>*<span class="pl-pds">&quot;</span></span>))(s);};},<span class="pl-en">stoken</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">s</span>){<span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">rtoken</span>(<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>^<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>s));},<span class="pl-en">until</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">p</span>){<span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">s</span>){<span class="pl-k">var</span> qx<span class="pl-k">=</span>[],rx<span class="pl-k">=</span><span class="pl-c1">null</span>;<span class="pl-k">while</span>(<span class="pl-smi">s</span>.<span class="pl-c1">length</span>){<span class="pl-k">try</span>{rx<span class="pl-k">=</span><span class="pl-smi">p</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>,s);}<span class="pl-k">catch</span>(e){<span class="pl-smi">qx</span>.<span class="pl-c1">push</span>(rx[<span class="pl-c1">0</span>]);s<span class="pl-k">=</span>rx[<span class="pl-c1">1</span>];<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line"><span class="pl-k">break</span>;}</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span>[qx,s];};},<span class="pl-en">many</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">p</span>){<span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">s</span>){<span class="pl-k">var</span> rx<span class="pl-k">=</span>[],r<span class="pl-k">=</span><span class="pl-c1">null</span>;<span class="pl-k">while</span>(<span class="pl-smi">s</span>.<span class="pl-c1">length</span>){<span class="pl-k">try</span>{r<span class="pl-k">=</span><span class="pl-smi">p</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>,s);}<span class="pl-k">catch</span>(e){<span class="pl-k">return</span>[rx,s];}</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">rx</span>.<span class="pl-c1">push</span>(r[<span class="pl-c1">0</span>]);s<span class="pl-k">=</span>r[<span class="pl-c1">1</span>];}</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span>[rx,s];};},<span class="pl-en">optional</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">p</span>){<span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">s</span>){<span class="pl-k">var</span> r<span class="pl-k">=</span><span class="pl-c1">null</span>;<span class="pl-k">try</span>{r<span class="pl-k">=</span><span class="pl-smi">p</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>,s);}<span class="pl-k">catch</span>(e){<span class="pl-k">return</span>[<span class="pl-c1">null</span>,s];}</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span>[r[<span class="pl-c1">0</span>],r[<span class="pl-c1">1</span>]];};},<span class="pl-en">not</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">p</span>){<span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">s</span>){<span class="pl-k">try</span>{<span class="pl-smi">p</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>,s);}<span class="pl-k">catch</span>(e){<span class="pl-k">return</span>[<span class="pl-c1">null</span>,s];}</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line"><span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">$P.Exception</span>(s);};},<span class="pl-en">ignore</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">p</span>){<span class="pl-k">return</span> p<span class="pl-k">?</span><span class="pl-k">function</span>(<span class="pl-smi">s</span>){<span class="pl-k">var</span> r<span class="pl-k">=</span><span class="pl-c1">null</span>;r<span class="pl-k">=</span><span class="pl-smi">p</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>,s);<span class="pl-k">return</span>[<span class="pl-c1">null</span>,r[<span class="pl-c1">1</span>]];}<span class="pl-k">:</span><span class="pl-c1">null</span>;},<span class="pl-en">product</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> px<span class="pl-k">=</span><span class="pl-c1">arguments</span>[<span class="pl-c1">0</span>],qx<span class="pl-k">=</span><span class="pl-c1">Array</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">slice</span>.<span class="pl-c1">call</span>(<span class="pl-c1">arguments</span>,<span class="pl-c1">1</span>),rx<span class="pl-k">=</span>[];<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">px</span>.<span class="pl-c1">length</span>;i<span class="pl-k">++</span>){<span class="pl-smi">rx</span>.<span class="pl-c1">push</span>(<span class="pl-smi">_</span>.<span class="pl-en">each</span>(px[i],qx));}</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> rx;},<span class="pl-en">cache</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">rule</span>){<span class="pl-k">var</span> cache<span class="pl-k">=</span>{},r<span class="pl-k">=</span><span class="pl-c1">null</span>;<span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">s</span>){<span class="pl-k">try</span>{r<span class="pl-k">=</span>cache[s]<span class="pl-k">=</span>(cache[s]<span class="pl-k">||</span><span class="pl-smi">rule</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>,s));}<span class="pl-k">catch</span>(e){r<span class="pl-k">=</span>cache[s]<span class="pl-k">=</span>e;}</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(r <span class="pl-k">instanceof</span> <span class="pl-smi">$P</span>.<span class="pl-smi">Exception</span>){<span class="pl-k">throw</span> r;}<span class="pl-k">else</span>{<span class="pl-k">return</span> r;}};},<span class="pl-en">any</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> px<span class="pl-k">=</span><span class="pl-c1">arguments</span>;<span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">s</span>){<span class="pl-k">var</span> r<span class="pl-k">=</span><span class="pl-c1">null</span>;<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">px</span>.<span class="pl-c1">length</span>;i<span class="pl-k">++</span>){<span class="pl-k">if</span>(px[i]<span class="pl-k">==</span><span class="pl-c1">null</span>){<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line"><span class="pl-k">try</span>{r<span class="pl-k">=</span>(px[i].<span class="pl-c1">call</span>(<span class="pl-c1">this</span>,s));}<span class="pl-k">catch</span>(e){r<span class="pl-k">=</span><span class="pl-c1">null</span>;}</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(r){<span class="pl-k">return</span> r;}}</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line"><span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">$P.Exception</span>(s);};},<span class="pl-en">each</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> px<span class="pl-k">=</span><span class="pl-c1">arguments</span>;<span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">s</span>){<span class="pl-k">var</span> rx<span class="pl-k">=</span>[],r<span class="pl-k">=</span><span class="pl-c1">null</span>;<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">px</span>.<span class="pl-c1">length</span>;i<span class="pl-k">++</span>){<span class="pl-k">if</span>(px[i]<span class="pl-k">==</span><span class="pl-c1">null</span>){<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line"><span class="pl-k">try</span>{r<span class="pl-k">=</span>(px[i].<span class="pl-c1">call</span>(<span class="pl-c1">this</span>,s));}<span class="pl-k">catch</span>(e){<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">$P.Exception</span>(s);}</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">rx</span>.<span class="pl-c1">push</span>(r[<span class="pl-c1">0</span>]);s<span class="pl-k">=</span>r[<span class="pl-c1">1</span>];}</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span>[rx,s];};},<span class="pl-en">all</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> px<span class="pl-k">=</span><span class="pl-c1">arguments</span>,_<span class="pl-k">=</span>_;<span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-en">each</span>(<span class="pl-smi">_</span>.<span class="pl-en">optional</span>(px));},<span class="pl-en">sequence</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">px</span>,<span class="pl-smi">d</span>,<span class="pl-smi">c</span>){d<span class="pl-k">=</span>d<span class="pl-k">||</span><span class="pl-smi">_</span>.<span class="pl-en">rtoken</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-pds">/</span></span>);c<span class="pl-k">=</span>c<span class="pl-k">||</span><span class="pl-c1">null</span>;<span class="pl-k">if</span>(<span class="pl-smi">px</span>.<span class="pl-c1">length</span><span class="pl-k">==</span><span class="pl-c1">1</span>){<span class="pl-k">return</span> px[<span class="pl-c1">0</span>];}</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">s</span>){<span class="pl-k">var</span> r<span class="pl-k">=</span><span class="pl-c1">null</span>,q<span class="pl-k">=</span><span class="pl-c1">null</span>;<span class="pl-k">var</span> rx<span class="pl-k">=</span>[];<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">px</span>.<span class="pl-c1">length</span>;i<span class="pl-k">++</span>){<span class="pl-k">try</span>{r<span class="pl-k">=</span>px[i].<span class="pl-c1">call</span>(<span class="pl-c1">this</span>,s);}<span class="pl-k">catch</span>(e){<span class="pl-k">break</span>;}</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">rx</span>.<span class="pl-c1">push</span>(r[<span class="pl-c1">0</span>]);<span class="pl-k">try</span>{q<span class="pl-k">=</span><span class="pl-smi">d</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>,r[<span class="pl-c1">1</span>]);}<span class="pl-k">catch</span>(ex){q<span class="pl-k">=</span><span class="pl-c1">null</span>;<span class="pl-k">break</span>;}</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">s<span class="pl-k">=</span>q[<span class="pl-c1">1</span>];}</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>r){<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">$P.Exception</span>(s);}</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(q){<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">$P.Exception</span>(q[<span class="pl-c1">1</span>]);}</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(c){<span class="pl-k">try</span>{r<span class="pl-k">=</span><span class="pl-smi">c</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>,r[<span class="pl-c1">1</span>]);}<span class="pl-k">catch</span>(ey){<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">$P.Exception</span>(r[<span class="pl-c1">1</span>]);}}</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span>[rx,(r<span class="pl-k">?</span>r[<span class="pl-c1">1</span>]<span class="pl-k">:</span>s)];};},<span class="pl-en">between</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">d1</span>,<span class="pl-smi">p</span>,<span class="pl-smi">d2</span>){d2<span class="pl-k">=</span>d2<span class="pl-k">||</span>d1;<span class="pl-k">var</span> _fn<span class="pl-k">=</span><span class="pl-smi">_</span>.<span class="pl-en">each</span>(<span class="pl-smi">_</span>.<span class="pl-en">ignore</span>(d1),p,<span class="pl-smi">_</span>.<span class="pl-en">ignore</span>(d2));<span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">s</span>){<span class="pl-k">var</span> rx<span class="pl-k">=</span><span class="pl-smi">_fn</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>,s);<span class="pl-k">return</span>[[rx[<span class="pl-c1">0</span>][<span class="pl-c1">0</span>],r[<span class="pl-c1">0</span>][<span class="pl-c1">2</span>]],rx[<span class="pl-c1">1</span>]];};},<span class="pl-en">list</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">p</span>,<span class="pl-smi">d</span>,<span class="pl-smi">c</span>){d<span class="pl-k">=</span>d<span class="pl-k">||</span><span class="pl-smi">_</span>.<span class="pl-en">rtoken</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-pds">/</span></span>);c<span class="pl-k">=</span>c<span class="pl-k">||</span><span class="pl-c1">null</span>;<span class="pl-k">return</span>(p <span class="pl-k">instanceof</span> <span class="pl-c1">Array</span><span class="pl-k">?</span><span class="pl-smi">_</span>.<span class="pl-en">each</span>(<span class="pl-smi">_</span>.<span class="pl-c1">product</span>(<span class="pl-smi">p</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>,<span class="pl-k">-</span><span class="pl-c1">1</span>),<span class="pl-smi">_</span>.<span class="pl-en">ignore</span>(d)),<span class="pl-smi">p</span>.<span class="pl-c1">slice</span>(<span class="pl-k">-</span><span class="pl-c1">1</span>),<span class="pl-smi">_</span>.<span class="pl-en">ignore</span>(c))<span class="pl-k">:</span><span class="pl-smi">_</span>.<span class="pl-en">each</span>(<span class="pl-smi">_</span>.<span class="pl-en">many</span>(<span class="pl-smi">_</span>.<span class="pl-en">each</span>(p,<span class="pl-smi">_</span>.<span class="pl-en">ignore</span>(d))),px,<span class="pl-smi">_</span>.<span class="pl-en">ignore</span>(c)));},<span class="pl-en">set</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">px</span>,<span class="pl-smi">d</span>,<span class="pl-smi">c</span>){d<span class="pl-k">=</span>d<span class="pl-k">||</span><span class="pl-smi">_</span>.<span class="pl-en">rtoken</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-pds">/</span></span>);c<span class="pl-k">=</span>c<span class="pl-k">||</span><span class="pl-c1">null</span>;<span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">s</span>){<span class="pl-k">var</span> r<span class="pl-k">=</span><span class="pl-c1">null</span>,p<span class="pl-k">=</span><span class="pl-c1">null</span>,q<span class="pl-k">=</span><span class="pl-c1">null</span>,rx<span class="pl-k">=</span><span class="pl-c1">null</span>,best<span class="pl-k">=</span>[[],s],last<span class="pl-k">=</span><span class="pl-c1">false</span>;<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">px</span>.<span class="pl-c1">length</span>;i<span class="pl-k">++</span>){q<span class="pl-k">=</span><span class="pl-c1">null</span>;p<span class="pl-k">=</span><span class="pl-c1">null</span>;r<span class="pl-k">=</span><span class="pl-c1">null</span>;last<span class="pl-k">=</span>(<span class="pl-smi">px</span>.<span class="pl-c1">length</span><span class="pl-k">==</span><span class="pl-c1">1</span>);<span class="pl-k">try</span>{r<span class="pl-k">=</span>px[i].<span class="pl-c1">call</span>(<span class="pl-c1">this</span>,s);}<span class="pl-k">catch</span>(e){<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">rx<span class="pl-k">=</span>[[r[<span class="pl-c1">0</span>]],r[<span class="pl-c1">1</span>]];<span class="pl-k">if</span>(r[<span class="pl-c1">1</span>].<span class="pl-c1">length</span><span class="pl-k">&gt;</span><span class="pl-c1">0</span><span class="pl-k">&amp;&amp;!</span>last){<span class="pl-k">try</span>{q<span class="pl-k">=</span><span class="pl-smi">d</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>,r[<span class="pl-c1">1</span>]);}<span class="pl-k">catch</span>(ex){last<span class="pl-k">=</span><span class="pl-c1">true</span>;}}<span class="pl-k">else</span>{last<span class="pl-k">=</span><span class="pl-c1">true</span>;}</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>last<span class="pl-k">&amp;&amp;</span>q[<span class="pl-c1">1</span>].<span class="pl-c1">length</span><span class="pl-k">===</span><span class="pl-c1">0</span>){last<span class="pl-k">=</span><span class="pl-c1">true</span>;}</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span>last){<span class="pl-k">var</span> qx<span class="pl-k">=</span>[];<span class="pl-k">for</span>(<span class="pl-k">var</span> j<span class="pl-k">=</span><span class="pl-c1">0</span>;j<span class="pl-k">&lt;</span><span class="pl-smi">px</span>.<span class="pl-c1">length</span>;j<span class="pl-k">++</span>){<span class="pl-k">if</span>(i<span class="pl-k">!=</span>j){<span class="pl-smi">qx</span>.<span class="pl-c1">push</span>(px[j]);}}</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">p<span class="pl-k">=</span><span class="pl-smi">_</span>.<span class="pl-c1">set</span>(qx,d).<span class="pl-c1">call</span>(<span class="pl-c1">this</span>,q[<span class="pl-c1">1</span>]);<span class="pl-k">if</span>(p[<span class="pl-c1">0</span>].<span class="pl-c1">length</span><span class="pl-k">&gt;</span><span class="pl-c1">0</span>){rx[<span class="pl-c1">0</span>]<span class="pl-k">=</span>rx[<span class="pl-c1">0</span>].<span class="pl-c1">concat</span>(p[<span class="pl-c1">0</span>]);rx[<span class="pl-c1">1</span>]<span class="pl-k">=</span>p[<span class="pl-c1">1</span>];}}</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(rx[<span class="pl-c1">1</span>].<span class="pl-c1">length</span><span class="pl-k">&lt;</span>best[<span class="pl-c1">1</span>].<span class="pl-c1">length</span>){best<span class="pl-k">=</span>rx;}</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(best[<span class="pl-c1">1</span>].<span class="pl-c1">length</span><span class="pl-k">===</span><span class="pl-c1">0</span>){<span class="pl-k">break</span>;}}</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(best[<span class="pl-c1">0</span>].<span class="pl-c1">length</span><span class="pl-k">===</span><span class="pl-c1">0</span>){<span class="pl-k">return</span> best;}</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(c){<span class="pl-k">try</span>{q<span class="pl-k">=</span><span class="pl-smi">c</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>,best[<span class="pl-c1">1</span>]);}<span class="pl-k">catch</span>(ey){<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">$P.Exception</span>(best[<span class="pl-c1">1</span>]);}</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">best[<span class="pl-c1">1</span>]<span class="pl-k">=</span>q[<span class="pl-c1">1</span>];}</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> best;};},<span class="pl-en">forward</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">gr</span>,<span class="pl-smi">fname</span>){<span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">s</span>){<span class="pl-k">return</span> gr[fname].<span class="pl-c1">call</span>(<span class="pl-c1">this</span>,s);};},<span class="pl-en">replace</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">rule</span>,<span class="pl-smi">repl</span>){<span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">s</span>){<span class="pl-k">var</span> r<span class="pl-k">=</span><span class="pl-smi">rule</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>,s);<span class="pl-k">return</span>[repl,r[<span class="pl-c1">1</span>]];};},<span class="pl-en">process</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">rule</span>,<span class="pl-smi">fn</span>){<span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">s</span>){<span class="pl-k">var</span> r<span class="pl-k">=</span><span class="pl-smi">rule</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>,s);<span class="pl-k">return</span>[<span class="pl-smi">fn</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>,r[<span class="pl-c1">0</span>]),r[<span class="pl-c1">1</span>]];};},<span class="pl-en">min</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">min</span>,<span class="pl-smi">rule</span>){<span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">s</span>){<span class="pl-k">var</span> rx<span class="pl-k">=</span><span class="pl-smi">rule</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>,s);<span class="pl-k">if</span>(rx[<span class="pl-c1">0</span>].<span class="pl-c1">length</span><span class="pl-k">&lt;</span>min){<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">$P.Exception</span>(s);}</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> rx;};}};<span class="pl-k">var</span> <span class="pl-en">_generator</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">op</span>){<span class="pl-k">return</span> <span class="pl-k">function</span>(){<span class="pl-k">var</span> args<span class="pl-k">=</span><span class="pl-c1">null</span>,rx<span class="pl-k">=</span>[];<span class="pl-k">if</span>(<span class="pl-c1">arguments</span>.<span class="pl-c1">length</span><span class="pl-k">&gt;</span><span class="pl-c1">1</span>){args<span class="pl-k">=</span><span class="pl-c1">Array</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">slice</span>.<span class="pl-c1">call</span>(<span class="pl-c1">arguments</span>);}<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-c1">arguments</span>[<span class="pl-c1">0</span>]<span class="pl-k">instanceof</span> <span class="pl-c1">Array</span>){args<span class="pl-k">=</span><span class="pl-c1">arguments</span>[<span class="pl-c1">0</span>];}</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(args){<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>,px<span class="pl-k">=</span><span class="pl-smi">args</span>.<span class="pl-c1">shift</span>();i<span class="pl-k">&lt;</span><span class="pl-smi">px</span>.<span class="pl-c1">length</span>;i<span class="pl-k">++</span>){<span class="pl-smi">args</span>.<span class="pl-c1">unshift</span>(px[i]);<span class="pl-smi">rx</span>.<span class="pl-c1">push</span>(<span class="pl-smi">op</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">null</span>,args));<span class="pl-smi">args</span>.<span class="pl-c1">shift</span>();<span class="pl-k">return</span> rx;}}<span class="pl-k">else</span>{<span class="pl-k">return</span> <span class="pl-smi">op</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">null</span>,<span class="pl-c1">arguments</span>);}};};<span class="pl-k">var</span> gx<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>optional not ignore cache<span class="pl-pds">&quot;</span></span>.<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-pds">/</span></span>);<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">gx</span>.<span class="pl-c1">length</span>;i<span class="pl-k">++</span>){_[gx[i]]<span class="pl-k">=</span><span class="pl-en">_generator</span>(_[gx[i]]);}</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-en">_vector</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">op</span>){<span class="pl-k">return</span> <span class="pl-k">function</span>(){<span class="pl-k">if</span>(<span class="pl-c1">arguments</span>[<span class="pl-c1">0</span>]<span class="pl-k">instanceof</span> <span class="pl-c1">Array</span>){<span class="pl-k">return</span> <span class="pl-smi">op</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">null</span>,<span class="pl-c1">arguments</span>[<span class="pl-c1">0</span>]);}<span class="pl-k">else</span>{<span class="pl-k">return</span> <span class="pl-smi">op</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">null</span>,<span class="pl-c1">arguments</span>);}};};<span class="pl-k">var</span> vx<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>each any all<span class="pl-pds">&quot;</span></span>.<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-pds">/</span></span>);<span class="pl-k">for</span>(<span class="pl-k">var</span> j<span class="pl-k">=</span><span class="pl-c1">0</span>;j<span class="pl-k">&lt;</span><span class="pl-smi">vx</span>.<span class="pl-c1">length</span>;j<span class="pl-k">++</span>){_[vx[j]]<span class="pl-k">=</span><span class="pl-en">_vector</span>(_[vx[j]]);}}());(<span class="pl-k">function</span>(){<span class="pl-k">var</span> <span class="pl-en">flattenAndCompact</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">ax</span>){<span class="pl-k">var</span> rx<span class="pl-k">=</span>[];<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">ax</span>.<span class="pl-c1">length</span>;i<span class="pl-k">++</span>){<span class="pl-k">if</span>(ax[i]<span class="pl-k">instanceof</span> <span class="pl-c1">Array</span>){rx<span class="pl-k">=</span><span class="pl-smi">rx</span>.<span class="pl-c1">concat</span>(<span class="pl-en">flattenAndCompact</span>(ax[i]));}<span class="pl-k">else</span>{<span class="pl-k">if</span>(ax[i]){<span class="pl-smi">rx</span>.<span class="pl-c1">push</span>(ax[i]);}}}</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">return rx;};Date.Grammar={};Date.Translator={hour:function(s){return function(){this.hour=Number(s);};},minute:function(s){return function(){this.minute=Number(s);};},second:function(s){return function(){this.second=Number(s);};},meridian:function(s){return function(){this.meridian=s.slice(0,1).toLowerCase();};},timezone:function(s){return function(){var n=s.replace(/[^\d\+\-]/g,&quot;&quot;);if(n.length){this.timezoneOffset=Number(n);}else{this.timezone=s.toLowerCase();}};},day:function(x){var s=x[0];return function(){this.day=Number(s.match(/\d+/)[0]);};},month:function(s){return function(){this.month=((s.length==3)?Date.getMonthNumberFromName(s):(Number(s)-1));};},year:function(s){return function(){var n=Number(s);this.year=((s.length&gt;2)?n:(n+(((n+2000)&lt;Date.CultureInfo.twoDigitYearMax)?2000:1900)));};},rday:function(s){return function(){switch(s){case&quot;yesterday&quot;:this.days=-1;break;case&quot;tomorrow&quot;:this.days=1;break;case&quot;today&quot;:this.days=0;break;case&quot;now&quot;:this.days=0;this.now=true;break;}};},finishExact:function(x){x=(x instanceof Array)?x:[x];var now=new Date();this.year=now.getFullYear();this.month=now.getMonth();this.day=1;this.hour=0;this.minute=0;this.second=0;for(var i=0;i&lt;x.length;i++){if(x[i]){x[i].call(this);}}</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">hour</span><span class="pl-k">=</span>(<span class="pl-c1">this</span>.<span class="pl-smi">meridian</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&quot;</span>p<span class="pl-pds">&quot;</span></span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">this</span>.<span class="pl-smi">hour</span><span class="pl-k">&lt;</span><span class="pl-c1">13</span>)<span class="pl-k">?</span><span class="pl-c1">this</span>.<span class="pl-smi">hour</span><span class="pl-k">+</span><span class="pl-c1">12</span><span class="pl-k">:</span><span class="pl-c1">this</span>.<span class="pl-smi">hour</span>;<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">day</span><span class="pl-k">&gt;</span><span class="pl-c1">Date</span>.<span class="pl-en">getDaysInMonth</span>(<span class="pl-c1">this</span>.<span class="pl-smi">year</span>,<span class="pl-c1">this</span>.<span class="pl-smi">month</span>)){<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">RangeError</span>(<span class="pl-c1">this</span>.<span class="pl-smi">day</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span> is not a valid value for days.<span class="pl-pds">&quot;</span></span>);}</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> r<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">this</span>.<span class="pl-smi">year</span>,<span class="pl-c1">this</span>.<span class="pl-smi">month</span>,<span class="pl-c1">this</span>.<span class="pl-smi">day</span>,<span class="pl-c1">this</span>.<span class="pl-smi">hour</span>,<span class="pl-c1">this</span>.<span class="pl-smi">minute</span>,<span class="pl-c1">this</span>.<span class="pl-smi">second</span>);<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">timezone</span>){<span class="pl-smi">r</span>.<span class="pl-c1">set</span>({timezone<span class="pl-k">:</span><span class="pl-c1">this</span>.<span class="pl-smi">timezone</span>});}<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">timezoneOffset</span>){<span class="pl-smi">r</span>.<span class="pl-c1">set</span>({timezoneOffset<span class="pl-k">:</span><span class="pl-c1">this</span>.<span class="pl-smi">timezoneOffset</span>});}</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> r;},<span class="pl-en">finish</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">x</span>){x<span class="pl-k">=</span>(x <span class="pl-k">instanceof</span> <span class="pl-c1">Array</span>)<span class="pl-k">?</span><span class="pl-en">flattenAndCompact</span>(x)<span class="pl-k">:</span>[x];<span class="pl-k">if</span>(<span class="pl-smi">x</span>.<span class="pl-c1">length</span><span class="pl-k">===</span><span class="pl-c1">0</span>){<span class="pl-k">return</span> <span class="pl-c1">null</span>;}</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line"><span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">x</span>.<span class="pl-c1">length</span>;i<span class="pl-k">++</span>){<span class="pl-k">if</span>(<span class="pl-k">typeof</span> x[i]<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>){x[i].<span class="pl-c1">call</span>(<span class="pl-c1">this</span>);}}</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">now</span>){<span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>();}</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> today<span class="pl-k">=</span><span class="pl-c1">Date</span>.<span class="pl-en">today</span>();<span class="pl-k">var</span> method<span class="pl-k">=</span><span class="pl-c1">null</span>;<span class="pl-k">var</span> expression<span class="pl-k">=</span><span class="pl-k">!!</span>(<span class="pl-c1">this</span>.<span class="pl-smi">days</span><span class="pl-k">!=</span><span class="pl-c1">null</span><span class="pl-k">||</span><span class="pl-c1">this</span>.<span class="pl-smi">orient</span><span class="pl-k">||</span><span class="pl-c1">this</span>.<span class="pl-smi">operator</span>);<span class="pl-k">if</span>(expression){<span class="pl-k">var</span> gap,mod,orient;orient<span class="pl-k">=</span>((<span class="pl-c1">this</span>.<span class="pl-smi">orient</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&quot;</span>past<span class="pl-pds">&quot;</span></span><span class="pl-k">||</span><span class="pl-c1">this</span>.<span class="pl-smi">operator</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&quot;</span>subtract<span class="pl-pds">&quot;</span></span>)<span class="pl-k">?</span><span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">:</span><span class="pl-c1">1</span>);<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">weekday</span>){<span class="pl-c1">this</span>.<span class="pl-smi">unit</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>day<span class="pl-pds">&quot;</span></span>;gap<span class="pl-k">=</span>(<span class="pl-c1">Date</span>.<span class="pl-en">getDayNumberFromName</span>(<span class="pl-c1">this</span>.<span class="pl-smi">weekday</span>)<span class="pl-k">-</span><span class="pl-smi">today</span>.<span class="pl-c1">getDay</span>());mod<span class="pl-k">=</span><span class="pl-c1">7</span>;<span class="pl-c1">this</span>.<span class="pl-smi">days</span><span class="pl-k">=</span>gap<span class="pl-k">?</span>((gap<span class="pl-k">+</span>(orient<span class="pl-k">*</span>mod))<span class="pl-k">%</span>mod)<span class="pl-k">:</span>(orient<span class="pl-k">*</span>mod);}</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">month</span>){<span class="pl-c1">this</span>.<span class="pl-smi">unit</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>month<span class="pl-pds">&quot;</span></span>;gap<span class="pl-k">=</span>(<span class="pl-c1">this</span>.<span class="pl-smi">month</span><span class="pl-k">-</span><span class="pl-smi">today</span>.<span class="pl-c1">getMonth</span>());mod<span class="pl-k">=</span><span class="pl-c1">12</span>;<span class="pl-c1">this</span>.<span class="pl-smi">months</span><span class="pl-k">=</span>gap<span class="pl-k">?</span>((gap<span class="pl-k">+</span>(orient<span class="pl-k">*</span>mod))<span class="pl-k">%</span>mod)<span class="pl-k">:</span>(orient<span class="pl-k">*</span>mod);<span class="pl-c1">this</span>.<span class="pl-smi">month</span><span class="pl-k">=</span><span class="pl-c1">null</span>;}</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">unit</span>){<span class="pl-c1">this</span>.<span class="pl-smi">unit</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>day<span class="pl-pds">&quot;</span></span>;}</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-c1">this</span>[<span class="pl-c1">this</span>.<span class="pl-smi">unit</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>s<span class="pl-pds">&quot;</span></span>]<span class="pl-k">==</span><span class="pl-c1">null</span><span class="pl-k">||</span><span class="pl-c1">this</span>.<span class="pl-smi">operator</span><span class="pl-k">!=</span><span class="pl-c1">null</span>){<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-c1">value</span>){<span class="pl-c1">this</span>.<span class="pl-c1">value</span><span class="pl-k">=</span><span class="pl-c1">1</span>;}</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">unit</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&quot;</span>week<span class="pl-pds">&quot;</span></span>){<span class="pl-c1">this</span>.<span class="pl-smi">unit</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>day<span class="pl-pds">&quot;</span></span>;<span class="pl-c1">this</span>.<span class="pl-c1">value</span><span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">value</span><span class="pl-k">*</span><span class="pl-c1">7</span>;}</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>[<span class="pl-c1">this</span>.<span class="pl-smi">unit</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>s<span class="pl-pds">&quot;</span></span>]<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">value</span><span class="pl-k">*</span>orient;}</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-smi">today</span>.<span class="pl-c1">add</span>(<span class="pl-c1">this</span>);}<span class="pl-k">else</span>{<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">meridian</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">this</span>.<span class="pl-smi">hour</span>){<span class="pl-c1">this</span>.<span class="pl-smi">hour</span><span class="pl-k">=</span>(<span class="pl-c1">this</span>.<span class="pl-smi">hour</span><span class="pl-k">&lt;</span><span class="pl-c1">13</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">this</span>.<span class="pl-smi">meridian</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&quot;</span>p<span class="pl-pds">&quot;</span></span>)<span class="pl-k">?</span><span class="pl-c1">this</span>.<span class="pl-smi">hour</span><span class="pl-k">+</span><span class="pl-c1">12</span><span class="pl-k">:</span><span class="pl-c1">this</span>.<span class="pl-smi">hour</span>;}</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">weekday</span><span class="pl-k">&amp;&amp;!</span><span class="pl-c1">this</span>.<span class="pl-smi">day</span>){<span class="pl-c1">this</span>.<span class="pl-smi">day</span><span class="pl-k">=</span>(<span class="pl-smi">today</span>.<span class="pl-en">addDays</span>((<span class="pl-c1">Date</span>.<span class="pl-en">getDayNumberFromName</span>(<span class="pl-c1">this</span>.<span class="pl-smi">weekday</span>)<span class="pl-k">-</span><span class="pl-smi">today</span>.<span class="pl-c1">getDay</span>()))).<span class="pl-c1">getDate</span>();}</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">month</span><span class="pl-k">&amp;&amp;!</span><span class="pl-c1">this</span>.<span class="pl-smi">day</span>){<span class="pl-c1">this</span>.<span class="pl-smi">day</span><span class="pl-k">=</span><span class="pl-c1">1</span>;}</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-smi">today</span>.<span class="pl-c1">set</span>(<span class="pl-c1">this</span>);}}};<span class="pl-k">var</span> _<span class="pl-k">=</span><span class="pl-c1">Date</span>.<span class="pl-smi">Parsing</span>.<span class="pl-smi">Operators</span>,g<span class="pl-k">=</span><span class="pl-c1">Date</span>.<span class="pl-smi">Grammar</span>,t<span class="pl-k">=</span><span class="pl-c1">Date</span>.<span class="pl-smi">Translator</span>,_fn;<span class="pl-smi">g</span>.<span class="pl-smi">datePartDelimiter</span><span class="pl-k">=</span><span class="pl-smi">_</span>.<span class="pl-en">rtoken</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(<span class="pl-c1">[<span class="pl-c1">\s</span><span class="pl-c1">\-<span class="pl-cce">\.</span></span><span class="pl-cce">\,\/\x</span>27]</span><span class="pl-k">+</span>)<span class="pl-pds">/</span></span>);<span class="pl-smi">g</span>.<span class="pl-smi">timePartDelimiter</span><span class="pl-k">=</span><span class="pl-smi">_</span>.<span class="pl-en">stoken</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>:<span class="pl-pds">&quot;</span></span>);<span class="pl-smi">g</span>.<span class="pl-c1">whiteSpace</span><span class="pl-k">=</span><span class="pl-smi">_</span>.<span class="pl-en">rtoken</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-pds">/</span></span>);<span class="pl-smi">g</span>.<span class="pl-smi">generalDelimiter</span><span class="pl-k">=</span><span class="pl-smi">_</span>.<span class="pl-en">rtoken</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>((<span class="pl-c1">[<span class="pl-c1">\s</span><span class="pl-cce">\,</span>]</span><span class="pl-k">|</span>at<span class="pl-k">|</span>on)<span class="pl-k">+</span>)<span class="pl-pds">/</span></span>);<span class="pl-k">var</span> <span class="pl-c1">_C</span><span class="pl-k">=</span>{};<span class="pl-smi">g</span>.<span class="pl-en">ctoken</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">keys</span>){<span class="pl-k">var</span> fn<span class="pl-k">=</span><span class="pl-c1">_C</span>[keys];<span class="pl-k">if</span>(<span class="pl-k">!</span>fn){<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-c1">Date</span>.<span class="pl-smi">CultureInfo</span>.<span class="pl-smi">regexPatterns</span>;<span class="pl-k">var</span> kx<span class="pl-k">=</span><span class="pl-smi">keys</span>.<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>),px<span class="pl-k">=</span>[];<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">kx</span>.<span class="pl-c1">length</span>;i<span class="pl-k">++</span>){<span class="pl-smi">px</span>.<span class="pl-c1">push</span>(<span class="pl-smi">_</span>.<span class="pl-c1">replace</span>(<span class="pl-smi">_</span>.<span class="pl-en">rtoken</span>(c[kx[i]]),kx[i]));}</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">fn<span class="pl-k">=</span><span class="pl-c1">_C</span>[keys]<span class="pl-k">=</span><span class="pl-smi">_</span>.<span class="pl-smi">any</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">null</span>,px);}</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">return fn;};g.ctoken2=function(key){return _.rtoken(Date.CultureInfo.regexPatterns[key]);};g.h=_.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2]|[1-9])/),t.hour));g.hh=_.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2])/),t.hour));g.H=_.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/),t.hour));g.HH=_.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3])/),t.hour));g.m=_.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/),t.minute));g.mm=_.cache(_.process(_.rtoken(/^[0-5][0-9]/),t.minute));g.s=_.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/),t.second));g.ss=_.cache(_.process(_.rtoken(/^[0-5][0-9]/),t.second));g.hms=_.cache(_.sequence([g.H,g.mm,g.ss],g.timePartDelimiter));g.t=_.cache(_.process(g.ctoken2(&quot;shortMeridian&quot;),t.meridian));g.tt=_.cache(_.process(g.ctoken2(&quot;longMeridian&quot;),t.meridian));g.z=_.cache(_.process(_.rtoken(/^(\+|\-)?\s*\d\d\d\d?/),t.timezone));g.zz=_.cache(_.process(_.rtoken(/^(\+|\-)\s*\d\d\d\d/),t.timezone));g.zzz=_.cache(_.process(g.ctoken2(&quot;timezone&quot;),t.timezone));g.timeSuffix=_.each(_.ignore(g.whiteSpace),_.set([g.tt,g.zzz]));g.time=_.each(_.optional(_.ignore(_.stoken(&quot;T&quot;))),g.hms,g.timeSuffix);g.d=_.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1]|\d)/),_.optional(g.ctoken2(&quot;ordinalSuffix&quot;))),t.day));g.dd=_.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1])/),_.optional(g.ctoken2(&quot;ordinalSuffix&quot;))),t.day));g.ddd=g.dddd=_.cache(_.process(g.ctoken(&quot;sun mon tue wed thu fri sat&quot;),function(s){return function(){this.weekday=s;};}));g.M=_.cache(_.process(_.rtoken(/^(1[0-2]|0\d|\d)/),t.month));g.MM=_.cache(_.process(_.rtoken(/^(1[0-2]|0\d)/),t.month));g.MMM=g.MMMM=_.cache(_.process(g.ctoken(&quot;jan feb mar apr may jun jul aug sep oct nov dec&quot;),t.month));g.y=_.cache(_.process(_.rtoken(/^(\d\d?)/),t.year));g.yy=_.cache(_.process(_.rtoken(/^(\d\d)/),t.year));g.yyy=_.cache(_.process(_.rtoken(/^(\d\d?\d?\d?)/),t.year));g.yyyy=_.cache(_.process(_.rtoken(/^(\d\d\d\d)/),t.year));_fn=function(){return _.each(_.any.apply(null,arguments),_.not(g.ctoken2(&quot;timeContext&quot;)));};g.day=_fn(g.d,g.dd);g.month=_fn(g.M,g.MMM);g.year=_fn(g.yyyy,g.yy);g.orientation=_.process(g.ctoken(&quot;past future&quot;),function(s){return function(){this.orient=s;};});g.operator=_.process(g.ctoken(&quot;add subtract&quot;),function(s){return function(){this.operator=s;};});g.rday=_.process(g.ctoken(&quot;yesterday tomorrow today now&quot;),t.rday);g.unit=_.process(g.ctoken(&quot;minute hour day week month year&quot;),function(s){return function(){this.unit=s;};});g.value=_.process(_.rtoken(/^\d\d?(st|nd|rd|th)?/),function(s){return function(){this.value=s.replace(/\D/g,&quot;&quot;);};});g.expression=_.set([g.rday,g.operator,g.value,g.unit,g.orientation,g.ddd,g.MMM]);_fn=function(){return _.set(arguments,g.datePartDelimiter);};g.mdy=_fn(g.ddd,g.month,g.day,g.year);g.ymd=_fn(g.ddd,g.year,g.month,g.day);g.dmy=_fn(g.ddd,g.day,g.month,g.year);g.date=function(s){return((g[Date.CultureInfo.dateElementOrder]||g.mdy).call(this,s));};g.format=_.process(_.many(_.any(_.process(_.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/),function(fmt){if(g[fmt]){return g[fmt];}else{throw Date.Parsing.Exception(fmt);}}),_.process(_.rtoken(/^[^dMyhHmstz]+/),function(s){return _.ignore(_.stoken(s));}))),function(rules){return _.process(_.each.apply(null,rules),t.finishExact);});var _F={};var _get=function(f){return _F[f]=(_F[f]||g.format(f)[0]);};g.formats=function(fx){if(fx instanceof Array){var rx=[];for(var i=0;i&lt;fx.length;i++){rx.push(_get(fx[i]));}</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-smi">_</span>.<span class="pl-smi">any</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">null</span>,rx);}<span class="pl-k">else</span>{<span class="pl-k">return</span> <span class="pl-en">_get</span>(fx);}};<span class="pl-smi">g</span>.<span class="pl-smi">_formats</span><span class="pl-k">=</span><span class="pl-smi">g</span>.<span class="pl-en">formats</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>yyyy-MM-ddTHH:mm:ss<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>ddd, MMM dd, yyyy H:mm:ss tt<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>ddd MMM d yyyy HH:mm:ss zzz<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>d<span class="pl-pds">&quot;</span></span>]);<span class="pl-smi">g</span>.<span class="pl-smi">_start</span><span class="pl-k">=</span><span class="pl-smi">_</span>.<span class="pl-en">process</span>(<span class="pl-smi">_</span>.<span class="pl-c1">set</span>([<span class="pl-smi">g</span>.<span class="pl-smi">date</span>,<span class="pl-smi">g</span>.<span class="pl-smi">time</span>,<span class="pl-smi">g</span>.<span class="pl-smi">expression</span>],<span class="pl-smi">g</span>.<span class="pl-smi">generalDelimiter</span>,<span class="pl-smi">g</span>.<span class="pl-c1">whiteSpace</span>),<span class="pl-smi">t</span>.<span class="pl-smi">finish</span>);<span class="pl-smi">g</span>.<span class="pl-en">start</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">s</span>){<span class="pl-k">try</span>{<span class="pl-k">var</span> r<span class="pl-k">=</span><span class="pl-smi">g</span>.<span class="pl-smi">_formats</span>.<span class="pl-c1">call</span>({},s);<span class="pl-k">if</span>(r[<span class="pl-c1">1</span>].<span class="pl-c1">length</span><span class="pl-k">===</span><span class="pl-c1">0</span>){<span class="pl-k">return</span> r;}}<span class="pl-k">catch</span>(e){}</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-smi">g</span>.<span class="pl-smi">_start</span>.<span class="pl-c1">call</span>({},s);};}());<span class="pl-c1">Date</span>.<span class="pl-smi">_parse</span><span class="pl-k">=</span><span class="pl-c1">Date</span>.<span class="pl-smi">parse</span>;<span class="pl-c1">Date</span>.<span class="pl-en">parse</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">s</span>){<span class="pl-k">var</span> r<span class="pl-k">=</span><span class="pl-c1">null</span>;<span class="pl-k">if</span>(<span class="pl-k">!</span>s){<span class="pl-k">return</span> <span class="pl-c1">null</span>;}</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line"><span class="pl-k">try</span>{r<span class="pl-k">=</span><span class="pl-c1">Date</span>.<span class="pl-smi">Grammar</span>.<span class="pl-c1">start</span>.<span class="pl-c1">call</span>({},s);}<span class="pl-k">catch</span>(e){<span class="pl-k">return</span> <span class="pl-c1">null</span>;}</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span>((r[<span class="pl-c1">1</span>].<span class="pl-c1">length</span><span class="pl-k">===</span><span class="pl-c1">0</span>)<span class="pl-k">?</span>r[<span class="pl-c1">0</span>]<span class="pl-k">:</span><span class="pl-c1">null</span>);};<span class="pl-c1">Date</span>.<span class="pl-en">getParseFunction</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">fx</span>){<span class="pl-k">var</span> fn<span class="pl-k">=</span><span class="pl-c1">Date</span>.<span class="pl-smi">Grammar</span>.<span class="pl-en">formats</span>(fx);<span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">s</span>){<span class="pl-k">var</span> r<span class="pl-k">=</span><span class="pl-c1">null</span>;<span class="pl-k">try</span>{r<span class="pl-k">=</span><span class="pl-smi">fn</span>.<span class="pl-c1">call</span>({},s);}<span class="pl-k">catch</span>(e){<span class="pl-k">return</span> <span class="pl-c1">null</span>;}</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span>((r[<span class="pl-c1">1</span>].<span class="pl-c1">length</span><span class="pl-k">===</span><span class="pl-c1">0</span>)<span class="pl-k">?</span>r[<span class="pl-c1">0</span>]<span class="pl-k">:</span><span class="pl-c1">null</span>);};};<span class="pl-c1">Date</span>.<span class="pl-en">parseExact</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">s</span>,<span class="pl-smi">fx</span>){<span class="pl-k">return</span> <span class="pl-c1">Date</span>.<span class="pl-en">getParseFunction</span>(fx)(s);};</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

  </div>

      <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.39502s from github-fe-54106a2.cp1-iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  

  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha256-UGFpyy/nYlS5IejJRN1AblyrLXGeZX6s6K2phIYjFHI=" src="https://assets-cdn.github.com/assets/frameworks-506169cb2fe76254b921e8c944dd406e5cab2d719e657eace8ada98486231472.js"></script>
    <script async="async" crossorigin="anonymous" integrity="sha256-nrR/vKgzIgtY04IzQr+/baIfC0MMDbvXMn+eNDU7rcU=" src="https://assets-cdn.github.com/assets/github-9eb47fbca833220b58d3823342bfbf6da21f0b430c0dbbd7327f9e34353badc5.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

