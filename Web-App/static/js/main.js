let populate = function() {
    let team1 = document.getElementById('team-1');
    let team2 = document.getElementById('team-2');
    let ground = document.getElementById('groundid');

    let countries = [
        {value: " Afghanistan " , text: " Afghanistan " },
        {value: " Australia ", text: " Australia "},
        {value: " Bangladesh ", text: " Bangladesh "},
        {value: " Bermuda ", text: " Bermuda "},
        {value: " Canada ", text: " Canada "},
        {value: " East Africa ", text: " East Africa "},
        {value: " England ", text: " England "},
        {value: " Hong Kong ", text: " Hong Kong "},
        {value: " India ", text: " India "},
        {value: " Ireland ", text: " Ireland "},
        {value: " Kenya ", text: " Kenya "},
        {value: " Namibia ", text: " Namibia "},
        {value: " Netherlands ", text: " Netherlands "},
        {value: " New Zealand ", text: " New Zealand "},
        {value: " P.N.G. ", text: " P.N.G. "},
        {value: " Pakistan ", text: " Pakistan "},
        {value: " Scotland ", text: " Scotland "},
        {value: " South Africa ", text: " South Africa "},
        {value: " Sri Lanka ", text: " Sri Lanka "},
        {value: " U.A.E. ", text: " U.A.E. "},
        {value: " U.S.A. ", text: " U.S.A. "},
        {value: " West Indies ", text: " West Indies "},
        {value: " Zimbabwe ", text: " Zimbabwe "}
        ];

    for(let i = 0; i< countries.length; i++)    {
        let option = document.createElement('option'); 
        option.setAttribute('value', countries[i].value);
        option.appendChild(document.createTextNode(countries[i].text));
        team1.appendChild(option);
    }

    for(let i = 0; i< countries.length; i++)    {
        let option = document.createElement('option'); 
        option.setAttribute('value', countries[i].value);
        option.appendChild(document.createTextNode(countries[i].text));
        team2.appendChild(option);
    }

    console.log("Teams Populated");

    let groundNames = [
        {value: " Aberdeen " , text: " Aberdeen "},
        {value: " Abu Dhabi " , text: " Abu Dhabi "},
        {value: " Adelaide " , text: " Adelaide "},
        {value: " Ahmedabad " , text: " Ahmedabad "},
        {value: " Albion " , text: " Albion "},
        {value: " Albury " , text: " Albury "},
        {value: " Amritsar " , text: " Amritsar "},
        {value: " Amstelveen " , text: " Amstelveen "},
        {value: " Auckland " , text: " Auckland "},
        {value: " Ayr " , text: " Ayr "},
        {value: " Ballarat " , text: " Ballarat "},
        {value: " Basseterre " , text: " Basseterre "},
        {value: " Belfast " , text: " Belfast "},
        {value: " Bengaluru " , text: " Bengaluru "},
        {value: " Benoni " , text: " Benoni "},
        {value: " Berri " , text: " Berri "},
        {value: " Birmingham " , text: " Birmingham "},
        {value: " Bloemfontein " , text: " Bloemfontein "},
        {value: " Bogra " , text: " Bogra "},
        {value: " Bridgetown " , text: " Bridgetown "},
        {value: " Brisbane " , text: " Brisbane "},
        {value: " Bristol " , text: " Bristol "},
        {value: " Bulawayo " , text: " Bulawayo "},
        {value: " Cairns " , text: " Cairns "},
        {value: " Canberra " , text: " Canberra "},
        {value: " Canterbury " , text: " Canterbury "},
        {value: " Cape Town " , text: " Cape Town "},
        {value: " Cardiff " , text: " Cardiff "},
        {value: " Castries " , text: " Castries "},
        {value: " Centurion " , text: " Centurion "},
        {value: " Chandigarh " , text: " Chandigarh "},
        {value: " Chelmsford " , text: " Chelmsford "},
        {value: " Chennai " , text: " Chennai "},
        {value: " Chester " , text: " Chester "},
        {value: " Chittagong " , text: " Chittagong "},
        {value: " Christchurch " , text: " Christchurch "},
        {value: " Colombo " , text: " Colombo "},
        {value: " Cuttack " , text: " Cuttack "},
        {value: " Dambulla " , text: " Dambulla "},
        {value: " Darwin " , text: " Darwin "},
        {value: " Delhi " , text: " Delhi "},
        {value: " Derby " , text: " Derby "},
        {value: " Devonport " , text: " Devonport "},
        {value: " Dhaka " , text: " Dhaka "},
        {value: " Dharamsala " , text: " Dharamsala "},
        {value: " Dubai " , text: " Dubai "},
        {value: " Dublin " , text: " Dublin "},
        {value: " Dunedin " , text: " Dunedin "},
        {value: " Durban " , text: " Durban "},
        {value: " East London " , text: " East London "},
        {value: " Edinburgh " , text: " Edinburgh "},
        {value: " Faisalabad " , text: " Faisalabad "},
        {value: " Faridabad " , text: " Faridabad "},
        {value: " Fatullah " , text: " Fatullah "},
        {value: " Galle " , text: " Galle "},
        {value: " Georgetown " , text: " Georgetown "},
        {value: " Glasgow " , text: " Glasgow "},
        {value: " Greater Noida " , text: " Greater Noida "},
        {value: " Gros Islet " , text: " Gros Islet "},
        {value: " Gujranwala " , text: " Gujranwala "},
        {value: " Guwahati " , text: " Guwahati "},
        {value: " Gwalior " , text: " Gwalior "},
        {value: " Hambantota " , text: " Hambantota "},
        {value: " Hamilton " , text: " Hamilton "},
        {value: " Harare " , text: " Harare "},
        {value: " Hobart " , text: " Hobart "},
        {value: " Hove " , text: " Hove "},
        {value: " Hyderabad " , text: " Hyderabad "},
        {value: " ICCA Dubai " , text: " ICCA Dubai "},
        {value: " Indore " , text: " Indore "},
        {value: " Jaipur " , text: " Jaipur "},
        {value: " Jalandhar " , text: " Jalandhar "},
        {value: " Jamshedpur " , text: " Jamshedpur "},
        {value: " Jodhpur " , text: " Jodhpur "},
        {value: " Johannesburg " , text: " Johannesburg "},
        {value: " Kandy " , text: " Kandy "},
        {value: " Kanpur " , text: " Kanpur "},
        {value: " Karachi " , text: " Karachi "},
        {value: " Khulna " , text: " Khulna "},
        {value: " Kimberley " , text: " Kimberley "},
        {value: " King City " , text: " King City "},
        {value: " Kingston " , text: " Kingston "},
        {value: " Kingstown " , text: " Kingstown "},
        {value: " Kochi " , text: " Kochi "},
        {value: " Kolkata " , text: " Kolkata "},
        {value: " Kuala Lumpur " , text: " Kuala Lumpur "},
        {value: " Kwekwe " , text: " Kwekwe "},
        {value: " Lahore " , text: " Lahore "},
        {value: " Launceston " , text: " Launceston "},
        {value: " Leeds " , text: " Leeds "},
        {value: " Leicester " , text: " Leicester "},
        {value: " Lincoln " , text: " Lincoln "},
        {value: " Lord's " , text: " Lord's "},
        {value: " Lucknow " , text: " Lucknow "},
        {value: " Manchester " , text: " Manchester "},
        {value: " Margao " , text: " Margao "},
        {value: " Melbourne " , text: " Melbourne "},
        {value: " Mohali " , text: " Mohali "},
        {value: " Mombasa " , text: " Mombasa "},
        {value: " Mong Kok " , text: " Mong Kok "},
        {value: " Moratuwa " , text: " Moratuwa "},
        {value: " Mount Maunganui " , text: " Mount Maunganui "},
        {value: " Multan " , text: " Multan "},
        {value: " Mumbai " , text: " Mumbai "},
        {value: " Nagpur " , text: " Nagpur "},
        {value: " Nairobi " , text: " Nairobi "},        
        {value: " Napier " , text: " Napier "},
        {value: " Nelson " , text: " Nelson "},
        {value: " New Delhi " , text: " New Delhi "},
        {value: " New Plymouth " , text: " New Plymouth "},
        {value: " North Sound " , text: " North Sound "},
        {value: " Northampton " , text: " Northampton "},
        {value: " Nottingham " , text: " Nottingham "},
        {value: " Paarl " , text: " Paarl "},
        {value: " Pallekele " , text: " Pallekele "},
        {value: " Patna " , text: " Patna "},
        {value: " Perth " , text: " Perth "},
        {value: " Pietermaritzburg " , text: " Pietermaritzburg "},
        {value: " Port Elizabeth " , text: " Port Elizabeth "},
        {value: " Port Moresby " , text: " Port Moresby "},
        {value: " Port of Spain " , text: " Port of Spain "},
        {value: " Potchefstroom " , text: " Potchefstroom "},
        {value: " Providence " , text: " Providence "},
        {value: " Pune " , text: " Pune "},
        {value: " Queenstown " , text: " Queenstown "},
        {value: " Quetta " , text: " Quetta "},
        {value: " Rajkot " , text: " Rajkot "},
        {value: " Ranchi " , text: " Ranchi "},
        {value: " Rawalpindi " , text: " Rawalpindi "},
        {value: " Roseau " , text: " Roseau "},
        {value: " Rotterdam " , text: " Rotterdam "},
        {value: " Sahiwal " , text: " Sahiwal "},
        {value: " Sargodha " , text: " Sargodha "},
        {value: " Scarborough " , text: " Scarborough "},
        {value: " Sharjah " , text: " Sharjah "},
        {value: " Sheikhupura " , text: " Sheikhupura "},
        {value: " Sialkot " , text: " Sialkot "},
        {value: " Singapore " , text: " Singapore "},
        {value: " Southampton " , text: " Southampton "},
        {value: " Srinagar " , text: " Srinagar "},
        {value: " St George's " , text: " St George's "},
        {value: " St John's " , text: " St John's "},
        {value: " Swansea " , text: " Swansea" },
        {value: " Sydney " , text: " Sydney "},
        {value: " Tangier " , text: " Tangier "},
        {value: " Taunton " , text: " Taunton "},
        {value: " Taupo " , text: " Taupo "},
        {value: " The Hague " , text: " The Hague "},
        {value: " The Oval " , text: " The Oval "},
        {value: " Thiruvananthapuram " , text: " Thiruvananthapuram "},
        {value: " Toronto " , text: " Toronto "},
        {value: " Townsville " , text: " Townsville "},
        {value: " Tunbridge Wells " , text: " Tunbridge Wells "},
        {value: " Vadodara " , text: " Vadodara "},
        {value: " Vijayawada " , text: " Vijayawada "},
        {value: " Visakhapatnam " , text: " Visakhapatnam "},
        {value: " Wellington " , text: " Wellington "},
        {value: " Whangarei " , text: " Whangarei "},
        {value: " Worcester " , text: " Worcester "}
    ];

    console.log("Created");

    for(let i = 0; i< groundNames.length; i++)    {
        let option = document.createElement('option'); 
        option.setAttribute('value', groundNames[i].value);
        option.appendChild(document.createTextNode(groundNames[i].text));
        ground.appendChild(option);
    }

    console.log("Countries Populated");

}

window.onload = populate();

$('#team-1').on('change', function() {
    console.log('T1'+ this.value);
    console.log('T2' + $('#team-2').val());
    if($('#team-2').val() == this.value)
    {
        alert("Both teams chosen are same");
        $(':input[type="submit"]').prop('disabled', true);
    }
    else
    {
        $(':input[type="submit"]').prop('disabled', false);
    }
});

$('#team-2').on('change', function() {
    console.log('T2'+ this.value);
    console.log('T1' + $('#team-1').val());
    if($('#team-1').val() == this.value)
    {
        alert("Both teams chosen are same");
        $(':input[type="submit"]').prop('disabled', true);
    }
    else
    {
        $(':input[type="submit"]').prop('disabled', false);
    }
});