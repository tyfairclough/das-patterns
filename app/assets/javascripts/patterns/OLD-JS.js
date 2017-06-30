$(document).ready(function() {
    $('.money-mask').mask('000,000,000,000,000.00', { reverse: false });
    $('.percentage-mask').mask('Z00', {
        translation: {
            'Z': {
                pattern: /[1]/,
                optional: true
            }
        },
        reverse: true
    });

    /* ------------------------------------------
     Word count
    ------------------------------------------ */
    var wordLen = $("#wordlimit").data("max-length-in-words");
    var len;
    $(".words-left").html(wordLen + ' words left');
    $('#wordlimit').keydown(function(event) {
        len = $('#wordlimit').val().split(/[\s]+/);
        console.log(len.length + " words are typed out of an available " + wordLen);
        wordsLeft = (wordLen) - len.length;
        if (len.length <= wordLen) {
            $('.words-left').html(wordsLeft + ' words left');
        } else {
            $('.words-left').html((wordsLeft *= -1) + ' words too many');
        }
    });

    /* ------------------------------------------
     Character count
    ------------------------------------------ */  
    characterCount = function(n) {
        console.log(n);
        var i = $(n),
            r = i.attr("data-val-length-max"),
            e = i.val(),
            h = (e.match(/\n/g) || []).length,
            o = e.length + h,
            u = Math.abs(r - o),
            f = i.closest(".form-group").find(".maxchar-count"),
            t = i.closest(".form-group").find(".maxchar-text"),
            s = i.closest(".form-group").find(".aria-limit");
        if (r)
            f.text(u);
        else {
            t.hide();
            return
        }
        o > r ? (f.parent().addClass("has-error"),
            t.text(" characters over the limit"),
            s.text("Character limit has been reached, you must type fewer than " + r + " characters"),
            u == 1 ? t.text(" character over the limit") : t.text(" characters over the limit")) : (f.parent().removeClass("has-error"),
            t.text(" characters remaining"),
            s.text(""),
            u == 1 ? t.text(" character remaining") : t.text(" characters remaining"))
    }
    $("textarea").on("keyup", function() {
        console.log(this);
        characterCount(this);
    });
    $("textarea").each(function() {
        characterCount(this);
    });
 

    // if (localStorage.getItem("organisations") === null) {
    //     console.log("no orgs founddddd");
    //     var newCompany = [];
    //     var newCompanyDetails = {};
    //     newCompanyDetails.name = "Acme Ltd2";
    //     newCompanyDetails.signed = 0;
    //     newCompany.push(JSON.stringify(newCompanyDetails));
    //     console.log(newCompany);
    //     localStorage.setItem("organisations", JSON.stringify(newCompany));
    // }

    //localStorage.setItem("sessionState","0");

    //GLOBAL VAR
    // var XMLSource = $('#search').attr('xmlData');
    // var keyword = '';
    // var catType = '';
    // var stn = '';
    // var frm = '';

    // var i = 0;
    // var msgPlural = 'are';

    // var paginateCount = 5;
    // var className = $("#content").attr('class');


    // switch (className) {
    //     case 'index':
    //         // reset site
    //         localStorage.setItem("onboarding", "0");
    //         localStorage.setItem("sessionState", "0");
    //         break;
    //     case 'manual-input':
    //         manualInputName();
    //         break;
    //     case 'public-sector':
    //         // put directory stuff here

    //         break;
    //     case 'public-sector-search':
    //         // put search keyword stuff here
    //         break;
    //     case 'organisations-add':
    //         $(".errror-summary").hide();

    //         $(".form-group").removeClass("error");
    //         $(".error-message, .error-summary").addClass("hidden");
    //         localStorage.setItem("organisation-address", JSON.stringify("101 Aviation House"))
    //         $(".panel").hide()
    //         $("label").click(function() {
    //                 $(".panel").hide();
    //                 $(this).next().show()
    //             })
    //             // adding organisations functions
    //         $(".organisations-add").keypress(function(e) {
    //             if (e.which == 13) {
    //                 $(".error-summary, .error-message").addClass("hidden");
    //                 $("form-group.").removeClass("error");
    //                 orgType()
    //                     // check the radio value
    //             } else {
    //                 //  return false;
    //             }
    //         })

    //         $(".organisations-add .button").click(function(e) {
    //             e.preventDefault();
    //             orgType();
    //         });
    //         break;
    //     case 'organisations-address':
    //         $(".button").click(function(e) {
    //             e.preventDefault();
    //             localStorage.setItem("organisation-address", JSON.stringify($("#address").val()));
    //             window.location.href = "/account/organisations/confirm.html?orgtype=";
    //         });
    //         break;
    //     case 'organisations-address-manual':
    //         // manual stuff
    //         organisationsAddressManual();
    //         break;
    //     case 'test':

    //         // get companies house number


    //         $.ajax({
    //             url: 'https://api.companieshouse.gov.uk/company/09963675',
    //             beforeSend: function(xhr) {
    //                 xhr.setRequestHeader("0IJg_twH_cNHRQ4TufRhHhKW72_W8xdgijXsHDyI:")
    //             },
    //             success: function(data) {
    //                 alert(data);
    //                 //process the JSON data etc
    //             }
    //         });
    //         break;
    //     case 'organisations-chquestion':
    //         $(".button").click(function(e) {
    //             e.preventDefault();
    //             chQuestion();
    //         })
    //         break;
    //     case 'organisations-question':
    //         $(".button").click(function(e) {
    //             e.preventDefault();
    //             orgQuestion();
    //         })
    //         break;
    //     case 'organisations-index':
    //         organisationsIndex();
    //         break;
    //     case 'before-you-start':
    //         $(".button").click(function(e) {
    //             e.preventDefault();
    //             areYouReady();
    //         })
    //         break;
    //     case 'rename-account':
    //         renameAccount();
    //         break;
    //     case 'check-mail':
    //         //checkMail();
    //         break;
    //     case 'sign-agreement':
    //         signAgreement();
    //         break;
    //     case 'zxcvbn':
    //         captureUserData();
    //         passwordPeek();
    //         break;
    //     case 'login':
    //         loginUser();
    //         break;
    //     case 'test-react-test':
    //         testReactCountdown();
    //         break;
    //     case 'test-react-instructions':
    //         localStorage.setItem("reactLoop", "1");
    //         break;
    //     case 'confirm':
    //         confirmDetails();
    //         break;
    //     case 'provider-index':
    //         providerIndex();
    //         break;
    //     case 'contract-of-service':
    //         contractOfService();
    //         break;
    //     case 'no-contract-of-service':
    //         noContractOfService();
    //         break;
    //     case 'confirm-apprentices':
    //         confirmApprentices();
    //         break;
    //     case 'confirm-identity':
    //         confirmIdentity();
    //         break;
    //     case 'choose-option-0':
    //         chooseOption0();
    //         break;
    //     case 'approve-question':
    //         approveQuestion();
    //         break;
    //     case 'first-approval':
    //         firstApproval();
    //         break;
    //     default:
    //         break;
    // };


    // function firstApproval() {
    //     $(".button").click(function(e) {
    //         e.preventDefault();
    //         var state = $('input[name=radio-group]:checked').val();

    //         if (state == "1") {
    //             // if they have already approved a commitment
    //             window.location.href = "/providers/memo.html";
    //         } else {
    //             window.location.href = "/providers/cohort-approve-no-memo.html"
    //         }
    //     });
    // }

    // function approveQuestion() {
    //     $(".button").click(function(e) {
    //         e.preventDefault();
    //         var state = $('input[name=radio-group]:checked').val();

    //         if (state == "1") {
    //             // if they have already approved a commitment
    //             window.location.href = "/providers/first-approval.html";
    //         } else {
    //             window.location.href = "/providers/sign-agreement.html"
    //         }
    //     });
    // }

    // function chooseOption0() {
    //     $(".button").click(function(e) {
    //         e.preventDefault();
    //         var state = $('input[name=radio-group]:checked').val();

    //         if (state == "1") {
    //             // if they have already approved a commitment
    //             window.location.href = "/providers/approve-question.html";
    //         } else if (state == "2") {
    //             // if they haven't go to contract of service
    //             window.location.href = "/providers/memo.html";
    //         } else {
    //             window.location.href = "/providers/cohort-save.html"
    //         }
    //     });
    // }

    // function confirmIdentity() {
    //     $(".button").click(function(e) {
    //         e.preventDefault();
    //         var state = $('input[name=radio-group]:checked').val();

    //         if (state == "1") {
    //             // if they have already approved a commitment
    //             window.location.href = "/providers/choose-option.html";
    //         } else {
    //             // if they haven't go to contract of service
    //             window.location.href = "/providers/advice-confirm-identity.html";
    //         }
    //     });
    // }

    // function confirmApprentices() {
    //     $(".button").click(function(e) {

    //         window.location.href = "/providers/choose-option.html";

    //     });
    // }

    // function noContractOfService() {
    //     $(".button").click(function(e) {
    //         e.preventDefault();
    //         var state = $('input[name=radio-group]:checked').val();

    //         if (state == "1") {
    //             // if they have already approved a commitment
    //             window.location.href = "/providers/advice-no-contract.html";
    //         } else {
    //             // if they haven't go to contract of service
    //             window.location.href = "/providers/choose-option.html";
    //         }
    //     });
    // };


    // function contractOfService() {

    //     $(".button").click(function(e) {
    //         e.preventDefault();
    //         var state = $('input[name=radio-group]:checked').val();

    //         if (state == "1") {
    //             // if they have already approved a commitment
    //             window.location.href = "/providers/confirm-apprentices.html";
    //         } else {
    //             // if they haven't go to contract of service
    //             window.location.href = "/providers/no-contract-reason.html";
    //         }
    //     });

    // };

    // function providerIndex() {

    //     $(".button").click(function(e) {
    //         e.preventDefault();

    //         var state = $('input[name=radio-group]:checked').val();

    //         if (state == "1") {
    //             // if they have already approved a commitment
    //             window.location.href = "/providers/confirm-apprentices.html";
    //         } else {
    //             // if they haven't go to contract of service
    //             window.location.href = "/providers/contract-of-service.html";
    //         }

    //     });
    // }


    // Global string replacements    
    // $(".orgnumber").text(JSON.parse(localStorage.getItem("organisation-number")));
    // $(".organisation-name, .company-name").text(JSON.parse(localStorage.getItem("organisation-name")));
    //$(".organisation-name, .company-name").val(JSON.parse(localStorage.getItem("organisation-name")));


    // if (JSON.parse(localStorage.getItem("user.name")) != "") {
    //     $(".user-name").text(JSON.parse(localStorage.getItem("user.name")));
    // } else {
    //     $(".user-name").text("Your profile");
    // }

    // $(".organisation-address").text(JSON.parse(localStorage.getItem("organisation-address")));
    // my functions
    // $('.review-agreement-button').on('click', function(e) {
        // localStorage.setItem("signAgreementFor", $(this).data('org-index'));
    // });

    // function confirmDetails() {
    //     $(".button").click(function(e) {
    //         e.preventDefault();
    //         var orgName = JSON.parse(localStorage.getItem("organisation-name"));
    //         addOrg(orgName);
    //         var onboarding = JSON.parse(localStorage.getItem("onboarding"));

    //         if (onboarding == 1) {
    //             window.location.href = "/account/dashboard/index.html?accountCreated=y";
    //         } else {
    //             window.location.href = "/account/organisations/index.html?orgAdded=y";

    //         }
    //     });
    // }

    // function organisationsIndex(i) {
    //     sessionState = localStorage.setItem("onboarding", "0");
    //     if (localStorage.getItem("organisations") === null) {
    //         console.log("no orgs found")
    //     } else {
    //         var orgArray = [];
    //         orgArray = JSON.parse(localStorage.getItem("organisations"));

    //         var $table = $("<table class='table'></table>");
    //         var $head = $("<thead><tr><th scope='col' style='padding-top:0'>Organisation</th><th>Agreement</th><th></th></tr></thead>");
    //         $table.append($head);


    //         for (var i = 0; i < orgArray.length; i++) {



    //             orgName = JSON.parse(orgArray[i]);

    //             var $line = $("<tr></tr>");

    //             // this is if it is disabled 

    //             if (orgName.signed != 0) {
    //                 // this is if its enabled
    //                 //$line.append( $( "<td><a href='#'></a></td>" ).html( orgName ) );
    //                 $line.append($("<td>" + orgName.name + "</td>"));
    //                 $line.append($("<td>Signed by <span class='user-name'>John Doe</span><div style='color:#6F777B' class='font-xsmall'>Signed on: <span class='today'>" + orgName.date + "</span></div></td>"));

    //                 $line.append($("<td class='numeric'><a class='button text-link' href='/account/organisations/agreement-cover-signed.html'>View</a></td>"));
    //                 //$line.append( $( "<td class='numeric'><a href='/account/organisations/sign.html' id='"+i+"' class='remove'>Remove</a></td>" ) );
    //                 $table.append($line);
    //                 continue;
    //             }
    //             $line.append($("<td>" + orgName.name + "</td>"));
    //             $line.append($("<td>Agreement not signed<div style='color:#6F777B' class='font-xsmall'>SFA agreement needs to be signed</div></td>"));

    //             $line.append($("<td class='numeric'><a href='/account/organisations/agreement-cover-sign.html' class='button secondary review-agreement-button' data-org-index='" + i + "'>Sign agreement</a></td>"));
    //             //$line.append( $( "<td class='numeric'><a href='/account/organisations/sign.html' id='"+i+"' class='remove'>Remove</a></td>" ) );
    //             $table.append($line);


    //         }


    //         $table.appendTo(document.body);

    //         // if you want to insert this table in a div with id attribute 
    //         // set as "myDiv", you can do this:
    //         $table.appendTo($("#orgTable"));

    //     }
    //     var orgArray = []
    //     orgArray = JSON.parse(localStorage.getItem("organisations"));
    //     console.log(orgArray);
    //     $("table a.remove").click(function(e) {
    //         e.preventDefault();
    //         //get the number of the row
    //         var rowNum = $(this).attr("id");
    //         //var rowNum = $(this).id;
    //         // splice that row
    //         console.log(rowNum);
    //         orgArray.splice(rowNum, 1);
    //         localStorage.setItem("organisations", JSON.stringify(orgArray));
    //         window.location.href = "/account/organisations/index.html";
    //     });

    //     userName();
    // }

    // function loginUser() {
    //     $(".button").click(function(e) {
    //         e.preventDefault();
    //         sessionState = localStorage.setItem("sessionState", "1");
    //         sessionState = localStorage.setItem("onboarding", "0");
    //         window.location.href = "/account/dashboard/index.html";
    //     });
    // }

    // function organisationsAddressManual() {
    //     $(".error-summary, .error-summary li, .error-message").hide();
    //     $(".form-group").removeClass("error");
    // }

    // function manualInputName() {
    //     $(".error-summary, .error-message").addClass("hidden");
    //     $(".form-group").removeClass("error");

    //     $(".button").click(function(e) {
    //         e.preventDefault();
    //         var orgName = $("#name").val();
    //         //addOrg(orgName);

    //         localStorage.setItem("organisation-name", JSON.stringify(orgName));
    //         window.location.href = "/account/organisations/address.html";
    //     })

    // }

    // function addOrg(orgName) {
    //     // This function takes a name and adds it to a list of organisations in an array
    //     var orgArray = new Array;

    //     var newOrg = '{"name":"' + orgName + '","signed":0}';

    //     //find out if there is a local storage for orgs already
    //     if (localStorage.getItem("organisations") === null) {
    //         orgArray.push(newOrg);
    //         localStorage.setItem("organisations", JSON.stringify(orgArray));

    //     } else {
    //         //orgArray = JSON.parse("["+localStorage.getItem("organisations")+"]");
    //         orgArray = JSON.parse(localStorage.getItem("organisations"));
    //         //orgArray.push(orgName);
    //         orgArray.push(newOrg);
    //         localStorage.setItem("organisations", JSON.stringify(orgArray));
    //     }
    // }

    // function captureUserData() {
    //     $(".zxcvbn .button").click(function(e) {
    //         e.preventDefault();
    //         var name = $("#users-name").val();
    //         var email = $("#email-address").val();
    //         var password = $("#password").val();
    //         if (email == "ty.fairclough@gmail.com") {
    //             $("#emailGroup").addClass("error");
    //             $("#emailError1").show().removeClass("hidden");
    //             $(".error-summary").show().removeClass("hidden");

    //         } else {
    //             // store field inputs into local storage
    //             localStorage.setItem("user.name", JSON.stringify(name));
    //             localStorage.setItem("user.email", JSON.stringify(email));
    //             localStorage.setItem("user.password", JSON.stringify(password));
    //             window.location.href = "/onboarding/check-mail.html";
    //         }
    //     });
    // }

    // function headerNav() {
    //     var sessionState = localStorage.getItem("sessionState");
    //     if (sessionState == "1") {
    //         // if you're logged in
    //         $("#loggedIn").removeClass("hidden");
    //         $("#loggedOut").addClass("hidden");
    //     } else {
    //         // if you're logged out
    //         $("#loggedOut").removeClass("hidden");
    //         $("#loggedIn").addClass("hidden");
    //     }
    // }
    // headerNav();

    // function signAgreement() {
    //     // contract scroll up
    //     $(document).scroll(function() {
    //         $("#draftContract .js-back-to-content").removeClass("visually-hidden");
    //     });
    //     $("#sign2").click(function(e) {
    //         e.preventDefault();
    //         //  check if this is on-boarding or not

    //         var today = new Date();
    //         var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

    //         var orgToSign = localStorage.getItem("signAgreementFor"),
    //             organisations = JSON.parse(localStorage.getItem("organisations"));

    //         existingDetails = JSON.parse(organisations[orgToSign]);
    //         existingDetails.signed = 1;
    //         existingDetails.date = date;

    //         organisations[orgToSign] = JSON.stringify(existingDetails);

    //         localStorage.setItem("organisations", JSON.stringify(organisations));

    //         var onboarding = JSON.parse(localStorage.getItem("onboarding"));
    //         window.location.href = "/account/organisations/index.html?newOrgSigned=y";

    //     });
    // };


    // function renameAccount() {
    //     $(".error-summary").hide();
    //     $(".form-group .error-message").hide();
    //     $(".form-group").removeClass("error");

    //     $(".button").click(function(e) {
    //         e.preventDefault();
    //         var newName = $("#new-name").val();

    //         if (newName == "") {
    //             //show error
    //             $(".error-summary").show();
    //             $(".form-group .error-message").show();
    //             $("#newName").addClass("error");
    //         } else {
    //             localStorage.setItem("organisation-name", JSON.stringify(newName));
    //             window.location = document.referrer + '?name-changed=1';
    //         };
    //     });
    // }

    // function areYouReady() {
    //     if ($('input[name=radio-group]:checked', 'form').val() == "no") {
    //         window.location.href = "/onboarding/not-ready.html";
    //     } else {
    //         window.location.href = "/onboarding/zxcvbn.html";
    //     }
    // }

    // function orgQuestion() {
    //     if ($('input[name=radio-group]:checked', 'form').val() == "charity") {
    //         window.location.href = "/account/organisations/addcharity.html";
    //     } else {
    //         window.location.href = "/account/organisations/public-sector-searh.html";
    //     }
    // };

    // function chQuestion() {
    //     if ($('input[name=radio-group]:checked', 'form').val() == "yes") {
    //         window.location.href = "/account/organisations/companieshouse.html?orgtype=limited";
    //     } else {
    //         window.location.href = "/account/organisations/add.html";
    //     }
    // }


    // function orgType() {
    //     //check if organisation is in companies house or other
    //     //company, rc, ip


    //     if ($('input[name=radio-group]:checked', 'form').val() == "ltd") {
    //         //check if company is limited, royal charter or ip
    //         var chn = $("#chn").val();
    //         localStorage.setItem("organisation-number", JSON.stringify(chn));


    //         var chnNumber = $("#chn").val().length;


    //         if (chnNumber == 0) {
    //             // return blank error
    //             console.log("blank companies house")
    //             $("#notValidCompany").removeClass("hidden");
    //             $(".error-summary").removeClass("hidden");
    //             $(".error-summary li").eq(1).removeClass("hidden");
    //         }


    //         if ($("#chn").val().match(/(IP|ip)/g)) {
    //             localStorage.setItem("organisation-type", JSON.stringify("ip"));
    //             window.location.href = "/account/organisations/address.html?orgtype=ip";
    //         } else if ($("#chn").val().match(/(RC|rc)/g)) {
    //             localStorage.setItem("organisation-type", JSON.stringify("rc"));
    //             window.location.href = "/account/organisations/address.html?orgtype=rc";
    //         } else if (chnNumber < 5 || chnNumber > 8) {
    //             console.log("number isn't right length");
    //             //window.location.href = "/account/organisations/manual-input.html";            
    //             $("#limited-group .form-group").addClass("error");
    //             $("#companyNotFound").removeClass("hidden");
    //             $(".additional-help").removeClass("hidden");
    //             $(".error-summary").removeClass("hidden");
    //             $(".error-summary ul li").eq(0).removeClass("hidden");
    //         } else {
    //             localStorage.setItem("organisation-type", JSON.stringify("ltd"));
    //             window.location.href = "/account/organisations/confirm.html?name=Acme%20Plc";
    //         }

    //     } else if ($('input[name=radio-group]:checked', 'form').val() == "public") {
    //         //public
    //         localStorage.setItem("organisation-number", JSON.stringify("12345678"));
    //         localStorage.setItem("organisation-type", JSON.stringify("public"));
    //         window.location.href = "/account/organisations/public-sector-search.html";
    //     } else if ($('input[name=radio-group]:checked', 'form').val() == "sole-trader") {
    //         window.location.href = "/account/organisations/manual-input.html";
    //     } else {
    //         //charity
    //         var ccn = $("#ccn").val();

    //         if (ccn.length == 0) {
    //             //alert("no charity entered")   ;
    //             $(".error-summary").removeClass("hidden");
    //             $(".error-summary ul li").eq(2).removeClass("hidden");
    //             $("#charity-panel").addClass("error");
    //             $("#charity-panel label span").removeClass("hidden");
    //             $("#charity-panel + p + .additional-help").removeClass("hidden");
    //         } else {
    //             localStorage.setItem("organisation-number", JSON.stringify(ccn));
    //             localStorage.setItem("organisation-type", JSON.stringify("charity"));
    //             window.location.href = "/account/organisations/confirm.html?orgtype=charity";
    //         }
    //     }

    // };
    
    // public body keyword search code
    $('#input-keywords, #searc-main').keypress(function(e) {
        if (e.which == 13) {
            e.preventDefault();
            $("#public-sector-search").hide();
            $("#results-wrapper").removeClass("hidden");
            keyword = $("#input-keywords").val();
            stn = '';
            searchThis();

            //$('form#login').submit();
            return false; //<---- Add this line
        }
    });

    $("#submit-keywords, #search-submit button").click(function(e) {
        e.preventDefault();
        $("#public-sector-search").hide();
        $("#results-wrapper").removeClass("hidden");
        keyword = $("#input-keywords").val();
        stn = '';
        searchThis();
    });

    function searchThis() {
        $.ajax({
            type: "GET",
            url: XMLSource,
            dataType: "xml",
            success: function(xml) {
                loadstnlocation(xml)
            },
            error: function(request, error) {
                console.log(arguments);
                //alert(" Can't do because: " + error);
            }
        });
    }

    function loadstnlocation(xmlData) {
        i = 0;
        var row;
        var searchExp = "";
        $(xmlData).find('row').each(function() {
            var iName = $(this).find('iName').text();
            var iSector = $(this).find('.iSector').text();

            //Format the keyword expression
            var exp = new RegExp(keyword, "gi");
            searchExp = iName.match(exp);

            if (searchExp != null) {
                stn += '<li><a href="/account/organisations/confirm.html?name=' + iName + '">' + iName + iSector + '</a></li>';
            };
        });
        showList(stn);
    }
    function showList(stn) {
        //Populate on page
        var contentTop = '<ul class="list list-links">';
        var contentBottom = '</ul>';
        var helpText = "        <h5 class='heading-small'>Can't find your organisation?</h5><p> You can <a href='manual-input.html'>add it manually here</a>.</p>";
        $('#results').html(contentTop + stn + contentBottom + helpText);
        getPublicSearchCount(keyword);
        disabledAddedPublicOrgs();

        $("ul a").click(function(e) {
            e.preventDefault();
            var orgName = $(this).text();
            var href = this.href;
            //addOrg(orgName);
            localStorage.setItem("organisation-name", orgName);
            window.location.href = href;
        })

    }
    function getPublicSearchCount(keyword) {
        $("#search-main").val(keyword);
        var count = $(".list-links li").length;
        $(".count").text(count);
    };
    function disabledAddedPublicOrgs() {
        var psAdded = 3;

        var name = $(".list-links li:nth-child(" + psAdded + ")").text();

        $(".list-links li:nth-child(" + psAdded + ")").replaceWith("<li class='added'>" + name + "<span>already added - <a href='#'>go to my account</a></span><li>");
    }
});

var content = '';
var XMLSource = $('#directory').attr('xmlData');
function searchThis() {
    $.ajax({
        type: "GET",
        url: XMLSource,
        dataType: "xml",
        success: function(xml) {
            loadData(xml)
        },
        error: function(request, error) {
            console.log(arguments);
            //alert(" Can't do because: " + error);
        }
    });
}

function loadData(xmlData) {

    $(xmlData).find('row').each(function() {
        var iName = $(this).find('iName').text();
        var iSector = $(this).find('iSector').text();


        //content += iName + iSector;
        //content += '<tr>';
        //content += '<td class="org-name">' + iName + '</td>';
        //content += '<td class="org-name">' + iSector + '</td>';
        //content += '<td class="numeric"><a href="/account/organisations/confirm.html">Select organisation</a></td>';
        //content += '</tr>';


        content += '<li><a href="/account/organisations/address.html">' + iName + '</a></li>';
    });

    returnDirectory(content);
};


function returnDirectory(content) {
    //    var contentTop = '<table><thead><tr><th scope="col">Insitute name</th><th scope="col">Sector</th><th class="numeric"></th></tr></thead><tbody>';
    //    var contentBottom = '</tbody></table>';
    //$("#content .alpha-list").html('<table><thead><tr><th scope="col">Insitute name</th><th scope="col">Sector</th><th class="numeric"></th></tr></thead><tbody>');  
    //    $("#content .alpha-list").html(contentTop + content + contentBottom);
    //$("#content .alpha-list").html('</tbody></table>');

    var contentTop = '<ul id="list" class="list list-links>';
    var contentBottom = '</ul>';
    $("#content .alpha-list").html(contentTop + content + contentBottom);

    splitList();

    fixPublicLink();
}

function splitList() {
    var list = { letters: [] };
    $("#list").children("li").each(function() {
        var itmLetter = $(this).text().substring(0, 1).toUpperCase();
        if (!(itmLetter in list)) {
            list[itmLetter] = [];
            list.letters.push(itmLetter);
        }
        list[itmLetter].push($(this));
    });
    list.letters.sort();
    $("#list").empty();
    $.each(list.letters, function(i, letter) {
        list[letter].sort(function(a, b) {
            return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
        });
        var ul = $("<ul/>");
        $.each(list[letter], function(idx, itm) {
            ul.append(itm);
        });
        $("#list").append($("<li/>").append($("<h2/>").attr("id", letter.toLowerCase()).addClass("title heading-medium").html(letter)).append(ul));
    });

}

function fixPublicLink() {
    $("ul#list li ul a").click(function(e) {
        //alert("hi");
        e.preventDefault();
        localStorage.setItem("organisation-name", JSON.stringify($(this).text()));
        window.location.href = "/account/organisations/address.html";
    });
}



searchThis();

//  $("section#directory ul li h2").append()("<a>back to top</a>");

var chart = c3.generate({
    bindTo: 'chart',
    size: {
        height: 600
    },
    data: {
        columns: [
            ['data1', 3274, 3274, 3274, 3274, 3274, 3274, 3274, 3274, 3274, 3274, 3274, 3274, 3107, 3107, 3107, 3107, 3107, 3107, 3107, 3107, 3107, 3107, 3107, 3107, 3729, 3107, 3107, 3107, 3107, 3107, 3107, 3107, 3107, 3107, 3529, 3529, 3529, 3529, 3529, 3529, 3529, 3529],
            ['data2', 32744, 32744, 32744, 32744, 32744, 32744, 32744, 32744, 32744, 32744, 32744, 31078, 31078, 31078, 31078, 31078, 31078, 31078, 31078, 31078, 31078, 31078, 37293, 31078, 31078, 31078, 31078, 31078, 31078, 31078, 31078, 31078, 35293, 35293, 35293, 35293, 35293, 35293, 35293, 35293, 35293, 35293],
            ['data3', -32745, -65490, -98234, -130979, -163724, -167719, -171713, -175708, -179703, -185398, -191092, -196787, -220815, -224843, -228871, -232899, -236927, -231105, -225284, -219462, -213640, -207818, -201996, -196640, -190818, -184996, -179174, -173352, -167530, -161708, -155886, -150064, -144242, -142635, -141028, -139421, -137814, -136207, -134600, -132994, -131387, -129780],
            ['data4', -0, -0, -0, -0, -0, -28750, -28750, -28750, -28750, -27050, -27050, -27050, -27050, -27050, -27050, -27050, -27050, -36900, -36900, -36900, -36900, -36900, -36900, -42650, -36900, -36900, -36900, -36900, -36900, -36900, -36900, -36900, -36900, -36900, -36900, -36900, -36900, -36900, -36900, -36900, -36900, -36900],
        ],
        names: {
            data1: 'levy top up',
            data2: 'levy credit',
            data3: 'left to spend',
            data4: 'provider payments'
        },
        type: 'bar',
        types: {
            data3: 'area-spline',
        },
        /* colors: {
        data1: '#2E358B',
        data2: '#6F72AF',
        data3: '#28A197'
        },
        */
        groups: [
            ['data1', 'data2', 'data4']
        ]
    },
    axis: {
        x: {
            label: 'Tax Month'
        },
        y: {
            tick: {
                count: 5,
                format: function(d) {
                    return "£" + d; }
            },
            label: 'Balance (£)'
        }
    },
    grid: {
        y: {
            lines: [{ value: 0 }]
        }
    },
    subchart: {
        show: true
    },
    zoom: {
        enabled: true
    }
});



// get & set sprint
var sprint = "house";
localStorage.setItem("sprint", JSON.stringify(sprint));

if (sprint == 11) {
    console.log("do this");
}

//get url variables    
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}
var accepted = getQueryVariable("accepted");
var invitesent = getQueryVariable("invitesent");
var inviteresent = getQueryVariable("inviteresent");
var invitecancelled = getQueryVariable("invitecancelled");
var rolechange = getQueryVariable("rolechange");
var userdeleted = getQueryVariable("userdeleted");
var PAYEremoved = getQueryVariable("PAYEremoved");
var PAYEadded = getQueryVariable("PAYEadded");
var rolechange = getQueryVariable("rolechange");
var flow = getQueryVariable("flow");
var newOrg = getQueryVariable("newOrg");
var newOrgSigned = getQueryVariable("newOrgSigned");
var agreementState = getQueryVariable("agreementState");
var newLevyAccount = getQueryVariable("newLevyAccount");
var sessionState = JSON.parse(localStorage.getItem("sessionState"));
var govgateway = getQueryVariable("govgateway");
var resetPassword = getQueryVariable("resetPassword");
var ab = getQueryVariable("ab");
var sprintIteration = JSON.parse(localStorage.getItem("sprint-number"));
var userEmail = JSON.parse(localStorage.getItem("email-address"));
var emailUpdated = getQueryVariable("emailUpdated");
var nameUpdated = getQueryVariable("nameUpdated");
var accountCreated = getQueryVariable("accountCreated");
var orgType = getQueryVariable("orgtype");
var organisationName = getQueryVariable("name");
var organisationNameNew = getQueryVariable("name-changed");



if (organisationName != "" || null) {
    var organisationNameStripped = organisationName.replace(/%20/g, " ");
    localStorage.setItem("organisation-name", JSON.stringify(organisationNameStripped));
}

if (organisationNameNew == "1") {
    $("#content").prepend("<div class='govuk-box-highlight'><h2 class='bold-large'>Account renamed</h2><p>You successfully updated the account name</p></div>");
};

// globals
//user details
var user = {}
user.firstName = JSON.parse(localStorage.getItem('user.firstName'));
user.lastName = JSON.parse(localStorage.getItem('user.lastName'));
user.email = JSON.parse(localStorage.getItem('user.email'));
user.password = JSON.parse(localStorage.getItem('user.password'));
user.jobTitle = JSON.parse(localStorage.getItem('user.jobTitle'));
//user states
user.NDA = JSON.parse(localStorage.getItem('userNDA'));
user.state = JSON.parse(localStorage.getItem('userState'));
user.type = JSON.parse(localStorage.getItem('userType'));

// company details
//var companyName = JSON.parse(localStorage.getItem('companyName'));
//var companiesHouseNumber = JSON.parse(localStorage.getItem('companiesHouseNumber'));
// agreement object {type:"",id:"",state:""} type=org type id=unique number state=is it signed?
//localStorage.setItem('agreements')
//var agreements = JSON.parse(localStorage.getItem('agreements'));

//var companyData = [{companiesHouseNumber: 342342342, companyName:"ACME Ltd",agreement:0}]
var companyData = [{ companiesHouseNumber: null, companyName: null, agreement: null }]

localStorage.setItem('companyData', JSON.stringify(companyData));
console.log(JSON.parse(localStorage.getItem('companyData')));

//var payeSchemes = [{ schemeNumber: "324234/AS1", englishPercentage: 80}, {schemeNumber:"234234234",englishPercentage: 90}];
var payeSchemes = [{ schemeNumber: null, englishPercentage: null }, { schemeNumber: null, englishPercentage: null }];
localStorage.setItem('payeSchemes', JSON.stringify(payeSchemes));
console.log(JSON.parse(localStorage.getItem('payeSchemes')));

// useful methods

//back button
function goBack() {
    window.history.back();
}

$(".link-back").click(function(e) {
    e.preventDefault();
    window.history.back();
})


// Sprint {{sprint}}

if ($("main").hasClass("index") == true) {
    localStorage.setItem('payeCount', 0)
};


// used service before page
$(".onboarding-index .button").click(function(e) {
    e.preventDefault();
    if ($('input[name=radio-group]:checked', 'form').val() == "new") {
        //set cookie about on-boarding
        localStorage.setItem('onboarding', "1");
        window.location.href = "/onboarding/before-you-start.html";
    } else {
        window.location.href = "/user/login.html";
        localStorage.setItem('onboarding', "0");
    }
})

// adding paye scheme
$(".sprint-11 .gateway-auth .button").click(function(e) {
    e.preventDefault();
    var payeCount = localStorage.getItem('payeCount');
    payeCount++;
    localStorage.setItem('payeCount', payeCount);
    window.location.href = "/onboarding/paye-check.html";
});

// add paye scheme loop
$(".sprint-11 .paye-check .button").click(function(e) {
    e.preventDefault();
    if ($('input[name=radio-group]:checked', 'form').val() == "addMore") {
        window.location.href = "/onboarding/gateway-login.html";
    } else {
        window.location.href = "/account/dashboard/index.html?newLevyAccount=y";
    }
});


// add correct number of paye schemes to page
if ($("main").hasClass("paye-check") == true) {
    var i = parseInt(localStorage.getItem('payeCount'));
    i++;
    $('.sprint-11 .paye-check table tr').hide();
    $('.sprint-11 .paye-check table#paye-check-2 tr:lt(' + i + ')').show()

    // remove a paye scheme    
    $("table a").click(function(e) {
        e.preventDefault();
        i--;
        localStorage.setItem('payeCount', i);
        location.reload();
    });
};


/*
// label switching site wide

if ( orgType == "rc" ) {
$(".orgtype").text("Royal Charter")
}

if ( orgType == "ip" ) {
$(".orgtype").text("Royal Charter")            
}

if ( orgType == "charity" ) {
$(".orgtype").text("charity")            
}    

*/




//switch

var orgType = JSON.parse(localStorage.getItem("organisation-type"));
switch (orgType) {
    case 'rc':
        $(".orgtype").text("Royal Charter");
        break;
    case 'ip':
        $(".orgtype").text("Industrial or Provident");
        break;
    case 'public':
        $(".orgtype").text("organisation");
        break;
    case 'charity':
        $(".orgtype").text("charity");
        break;
    case 'limited':
        $(".orgtype").text("company");
        break;
    case 'ltd':
        $(".orgtype").text("company");
        break;
    default:
        break;
}


// notifications site wide
if (newLevyAccount == "y") {
    $("#accountCreated").removeClass("hidden");
}
if (invitesent == "y") {
    $("#invitesent").removeClass("hidden");
}
if (userdeleted == "y") {
    $("#userdeleted").removeClass("hidden");
};
if (inviteresent == "y") {
    $("#inviteresent").removeClass("hidden");
};
if (invitecancelled == "y") {
    $("#invitecancelled").removeClass("hidden");
};
if (rolechange == "y") {
    $("#rolechange").removeClass("hidden");
}
if (PAYEremoved == "y") {
    $("#PAYEremoved").removeClass("hidden");
}
if (PAYEadded == "y") {
    $("#PAYEadded").removeClass("hidden");
}
if (accountCreated == "y") {
    $("#accountCreated").removeClass("hidden");
}
if (newOrgSigned == "y") {
    $("#org").removeClass("hidden");
}
if (newOrgSigned == "n") {
    $("#orgNo").removeClass("hidden");
}





function passwordPeek() {
    var myElement = document.getElementById('peak');

    // create a simple instance
    // by default, it only adds horizontal recognizers
    var mc = new Hammer(myElement);

    // listen to events...
    mc.on("tap", function(ev) {
        // show helper text
        $(".peakHelp").show().delay(2500).fadeOut("slow");
        console.log("tapp");
    });
    mc.on("press", function(ev) {
        console.log("press down")
        $(".peakHelp").hide();
        $("#password").attr('type', 'text');
        $('.show-pw').text("Hide").addClass("hide-pw");
    });
    mc.on("pressup", function(ev) {
        console.log("press release")
        $("#password").attr('type', 'password');
        $('.show-pw').text("Peek").removeClass("hide-pw");
    });

    /*   $('.show-pw').on('mousedown mouseup', function mouseState(e) {
    if (e.type == "mousedown") {
    //code triggers on hold
    console.log("hold");
    $("#password").attr('type', 'text');
    $('.show-pw').text("Hide").addClass("hide-pw");
    } else {
    $("#password").attr('type', 'password');
    $('.show-pw').text("Peak").removeClass("hide-pw");
    }
    });*/

}

$("#password").focusin(function() {
    $(".popover").slideDown("slow");
});

i = 0;
$("#password input").keyup(function(e) {
    i++;
    var len = $("#password-input").val().length;
    alert(len);
    //var oneCharacter = newRegExp(^[A-Za-z]([A-Za-z]{2}|[A-Za-z][0-9]|[0-9]{2})[0-9]{0,6}$);
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{6,}).*", "g");
    if (false == enoughRegex.test($(this).val())) {} else if (strongRegex.test($(this).val())) {} else if (mediumRegex.test($(this).val())) {
        $("#1char").removeClass("danger").addClass("success");
        $("#1char .fa").removeClass("fa-circle").addClass("fa-check-circle")
    } else if (len > 8) {
        $("#8num").removeClass("danger").addClass("success");
        $("#8num .fa").removeClass("fa-circle").addClass("fa-check-circle")
    } else {}
    return true;
})
i = 0;

$(".password-strength span").hide();

$("#passwordgroup input").keyup(function(e) {
    var password = $(this).val();
    var result = zxcvbn(password);
    console.log(result.score);
    var resultScore = result.score;


    switch (resultScore) {
        case 0:
            console.log("score is " + resultScore);
            $(".password-strength span").show();
            //$(".password-strength .veryweak").show();
            $(".password-strength.pw2 span").addClass("veryweak").css("width", "20%");
            $(".pw-strength").text("very weak");
            break;
        case 1:
            console.log("score is " + resultScore)
                //$(".password-strength span").hide();
                //$(".password-strength .veryweak, .password-strength .weak").show();
            $(".password-strength.pw2 span").removeClass().addClass("weak").css("width", "40%");
            $(".pw-strength").text("weak");
            break;
        case 2:
            console.log("score is " + resultScore)
                //$(".password-strength span").hide();
                ///$(".password-strength .veryweak, .password-strength .weak, .password-strength .good").show();
            $(".password-strength.pw2 span").removeClass().addClass("good").css("width", "60%");
            $(".pw-strength").text("good");
            break;
        case 3:
            console.log("score is " + resultScore)
                //$(".password-strength span").hide();
                //$(".password-strength .veryweak, .password-strength .weak, .password-strength .good, .password-strength .strong").show();
            $(".password-strength.pw2 span").removeClass().addClass("strong").css("width", "80%");
            $(".pw-strength").text("strong");
            break;
        case 4:
            console.log("score is " + resultScore)
                //$(".password-strength span").hide();
                //$(".password-strength .veryweak, .password-strength .weak, .password-strength .good, .password-strength .strong, .password-strength .verystrong").show();
            $(".password-strength.pw2 span").removeClass().addClass("verystrong").css("width", "100%");
            $(".pw-strength").text("very strong");
            break;
    }

});



/*   $("#passwordgroup input").keyup(function(e) {
var password = $(this).val();
//validate the length
if ( password.length < 8 ) {
$('#8num').removeClass('success').addClass('danger');
$("#8num i").removeClass("fa-check-circle").addClass("fa-circle");
} else {
$('#8num').removeClass('danger').addClass('success');
$("#8num i").removeClass("fa-circle").addClass("fa-check-circle");
}
//validate letter
if ( password.match(/[A-z]/) ) {
$('#1char').removeClass('danger').addClass('success');
$("#1char i").removeClass("fa-circle").addClass("fa-check-circle");
} else {
$('#1char').removeClass('success').addClass('danger');
$("#1char i").removeClass("fa-check-circle").addClass("fa-circle");
}
//validate capital letter
if ( password.match(/[A-Z]/) ) {
$('#1cap').removeClass('danger').addClass('success');
$("#1cap i").removeClass("fa-circle").addClass("fa-check-circle");
} else {
$('#1cap').removeClass('success').addClass('danger');
$("#1cap i").removeClass("fa-check-circle").addClass("fa-circle");
}
//validate number
if ( password.match(/\d/) ) {
$('#1num').removeClass('danger').addClass('success');
$("#1num i").removeClass("fa-circle").addClass("fa-check-circle");
} else {
$('#1num').removeClass('success').addClass('danger');
$("#1num i").removeClass("fa-check-circle").addClass("fa-circle");
}
i++;
var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
var enoughRegex = new RegExp("(?=.{6,}).*", "g");
if (false == enoughRegex.test(password)) {
console.log("pass");
$('.password-strength .tooweak').fadeIn();
$(".pw-strength").text("incomplete");
} else if (strongRegex.test($(this).val())) {
$('.password-strength .strong').fadeIn();
$(".pw-strength").text("strong");
} else if (mediumRegex.test($(this).val())) {
$('.password-strength .medium').fadeIn();
$(".pw-strength").text("moderate");
} else {
$('.password-strength .weak').fadeIn();
$(".pw-strength").text("weak");
}
return true;
}); */

function organisationName() {
    $(".organisation-name, .company-name").text(JSON.parse(localStorage.getItem("organisation-name")));
    $(".organisation-name, .company-name").val(JSON.parse(localStorage.getItem("organisation-name")));
}

function userName() {
    $(".user-name").text(JSON.parse(localStorage.getItem('user.firstName')));
}


function today() {
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    var date = new Date();
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    //console.log(day, monthNames[monthIndex], year);
    $(".today").text(day + ' ' + monthNames[monthIndex] + ' ' + year);
}
today();

function companiesHouseApi() {
    var chApiKey = "fNoTIfmTDt5fP0kKESHsxQSfa2DVzKXBDzCrFQkV";
    var company_number = "09963675";
    $.ajax({
        url: "https://api.companieshouse.gov.uk/company/",
        type: "GET",
        crossDomain: true,
        contentType: "application/json",
        data: company_number,
        dataType: 'json',
        success: function(data) {
            //Response text
            alert(data);
        },
        beforeSend: function(xhr) {
            xhr.withCredentials = true;
            xhr.setRequestHeader("Authorization", make_base_auth(encodeURIComponent(chApiKey)))
        },
        error: function() {
            //Gat failure
            alert("failure");

        }
    });
    function make_base_auth(user) {
        var tok = user;
        var hash = btoa(tok);
        return "Basic " + hash;
    }
}
