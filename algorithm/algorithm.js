function msg() {
        alert("test javascript");
}
function parse(web_scraper variable){
	var x = "Test to see if i can break a string.";
	var string_array = x.split(' '); // breaks each individual word up by whitespace and stores them into array
	var y = string_array.length - 1;
	var i = 0;
	
	while( i != y){
		var samplestr = string_Array[i];
		if(samplestr[samplestr.length - 1] == "?"){
			string_array[i] = samplestr.substr(0, samplestr.length - 1); // if the string contains a question mark, it will be removed for accurate comparison of keyword
		}
		if(samplestr[samplestr.length - 1] == "."){
                        string_array[i] = samplestr.substr(0, samplestr.length - 1); // if the string contains a period, it will be removed for accurate comparison of keyword
                }
		if(samplestr[samplestr.length - 1] == ","){
                        string_array[i] = samplestr.substr(0, samplestr.length - 1); // if the string contains a comma, it will be removed for accurate comparison of keyword
                }
		// same will be done for periods, commas, and quotations.
		compare(string_array[i]); // this sends each individual string into the comparison function,  but this will be changed to return the entire array of characters. It will be left as is for now.
		i++;
	}

}

function print_keywords() {


        var keywords = ["Abortion",
                "Affirmative Action",
                "Alternative Energy",
                "Armed Teachers",
                "Bitcoin",
                "Border Security",
                "Border Wall",
                "Campaign Finance",
                "Candidate Transparency",
                "Capital Gains Tax",
                "China Tariffs",
                "Citizenship Test",
                "Climate Change",
                "Confederate Flag",
                "Corporate Mega Mergers",
                "Corporate Tax",
                "Criminal Politicians",
                "Cuba",
                "Dakota Access Pipeline",
                "Death Penalty",
                "Deporting Criminal Immigrants",
                "Domestic Jobs",
                "Drones",
                "Drug Policy",
                "Drug Price Regulation",
                "Dual Citizenship",
                "Economic Stimulus",
                "Edward Snowden",
                "Electoral College",
                "Eminent Domain",
                "Equal pay",
                "Estate Tax",
                "Euthanasia",
                "Farm Subsidies",
                "Federal Reserve",
                "First Amendment",
                "Flag Burning",
                "Foreign Aid",
                "Foreign Elections",
                "Foreign Lobbying",
                "Fracking",
                "GMO Labels",
                "Gay Marriage",
                "Gender Identity",
                "Gender Workplace Diversity",
                "Gerrymandering",
                "Government Mandates",
                "Government Pensions",
                "Government Spending",
                "Gun Control",
                "Gun Liability",
                "ISIS",
                "ISIS Ground Troops",
                "Illegal Immigrant Detention",
                "Immigrant Assimilation",
                "Immigrant Children",
                "Immigrant Laborers",
                "Immigration",
                "Immigration Ban",
                "Immigration Healthcare",
                "In-State Tuition",
                "Israel",
                "LGBT",
                "Labor Unions",
                "Lobbyist",
                "Mandatory Military Service",
                "Mandatory Vaccines",
                "Marijuana",
                "Medicaid",
                "Medicaid Work Requirement",
                "Medicare Drug Prices",
                "Mental Health",
                "Military Spending",
                "Minimum Voting Age",
                "Minimum Wage",
                "Muslim Immigrants",
                "Muslim Surveillance",
                "NAFTA",
                "NATO",
                "NSA Domestic Surveillance",
                "NSA Surveillance",
                "Net Neutrality",
                "Niqāb",
                "No-Fly List Gun Control",
                "North Korea Military Strikes",
                "Nuclear Energy",
                "Obamacare",
                "Offshore Banking",
                "Oil Drilling",
                "Online Sales Tax",
                "Overtime Pay",
                "Paid Sick Leave",
                "Patriot Act",
                "Pension Reform",
                "Plastic Product Ban",
                "Pre-Existing Conditions",
                "Property Taxes",
                "Religious Freedom Act",
                "Right of Foreigners to Vote",
                "Safe Haven",
                "Safe Spaces",
                "Sanctuary Cities",
                "Single-Payer Healthcare",
                "Skilled Immigrants",
                "Social Media Regulation",
                "Social Security",
                "Space Exploration",
                "Syrian Refugees",
                "Tariffs",
                "Taxes",
                "Term Limits",
                "Terrorism",
                "Torture",
                "Ukraine",
                "United Nations",
                "Universal Basic Income",
                "VA Privatization",
                "Voter Fraud",
                "War on ISIS",
                "Welfare",
                "Welfare Drug Testing",
                "Whistleblower Protection",
                "Women in combat",
                "Yemen"
        ];

        var i;

        for (i = 0; i < keywords.length; i++) {
                document.write(keywords[i] + "<br>");
        }
}

function numberOf(word) {

        var keywords = ["Abortion",
                "Affirmative Action",
                "Alternative Energy",
                "Armed Teachers",
                "Bitcoin",
                "Border Security",
                "Border Wall",
                "Campaign Finance",
                "Candidate Transparency",
                "Capital Gains Tax",
                "China Tariffs",
                "Citizenship Test",
                "Climate Change",
                "Confederate Flag",
                "Corporate Mega Mergers",
                "Corporate Tax",
                "Criminal Politicians",
                "Cuba",
                "Dakota Access Pipeline",
                "Death Penalty",
                "Deporting Criminal Immigrants",
                "Domestic Jobs",
                "Drones",
                "Drug Policy",
                "Drug Price Regulation",
                "Dual Citizenship",
                "Economic Stimulus",
                "Edward Snowden",
                "Electoral College",
                "Eminent Domain",
                "Equal pay",
                "Estate Tax",
                "Euthanasia",
                "Farm Subsidies",
                "Federal Reserve",
                "First Amendment",
                "Flag Burning",
                "Foreign Aid",
                "Foreign Elections",
                "Foreign Lobbying",
                "Fracking",
                "GMO Labels",
                "Gay Marriage",
                "Gender Identity",
                "Gender Workplace Diversity",
                "Gerrymandering",
                "Government Mandates",
                "Government Pensions",
                "Government Spending",
                "Gun Control",
                "Gun Liability",
                "ISIS",
                "ISIS Ground Troops",
                "Illegal Immigrant Detention",
                "Immigrant Assimilation",
                "Immigrant Children",
                "Immigrant Laborers",
                "Immigration",
                "Immigration Ban",
                "Immigration Healthcare",
                "In-State Tuition",
                "Israel",
                "LGBT",
                "Labor Unions",
                "Lobbyist",
                "Mandatory Military Service",
                "Mandatory Vaccines",
                "Marijuana",
                "Medicaid",
                "Medicaid Work Requirement",
                "Medicare Drug Prices",
                "Mental Health",
                "Military Spending",
                "Minimum Voting Age",
                "Minimum Wage",
                "Muslim Immigrants",
                "Muslim Surveillance",
                "NAFTA",
                "NATO",
                "NSA Domestic Surveillance",
                "NSA Surveillance",
                "Net Neutrality",
                "Niqāb",
                "No-Fly List Gun Control",
                "North Korea Military Strikes",
                "Nuclear Energy",
                "Obamacare",
                "Offshore Banking",
                "Oil Drilling",
                "Online Sales Tax",
                "Overtime Pay",
                "Paid Sick Leave",
                "Patriot Act",
                "Pension Reform",
                "Plastic Product Ban",
                "Pre-Existing Conditions",
                "Property Taxes",
                "Religious Freedom Act",
                "Right of Foreigners to Vote",
                "Safe Haven",
                "Safe Spaces",
                "Sanctuary Cities",
                "Single-Payer Healthcare",
                "Skilled Immigrants",
                "Social Media Regulation",
                "Social Security",
                "Space Exploration",
                "Syrian Refugees",
                "Tariffs",
                "Taxes",
                "Term Limits",
                "Terrorism",
                "Torture",
                "Ukraine",
                "United Nations",
                "Universal Basic Income",
                "VA Privatization",
                "Voter Fraud",
                "War on ISIS",
                "Welfare",
                "Welfare Drug Testing",
                "Whistleblower Protection",
                "Women in combat",
                "Yemen"
        ];

        var i;
        var count = 0;

        for (i = 0; i < keywords.length; i++) {
                if (word == keywords[i]) {
                        count = count + 1;
                }
        }
        return count;

}







//end
