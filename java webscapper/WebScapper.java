package webScapper;

import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

public class WebScapper {

	private String url;
	
	public WebScapper() {
		
	}
	
	public void dowork() {
		//for testing purposes
		url ="https://www.nytimes.com/2018/10/15/science/drought-beer-climate.html?action=click&contentCollection=science&region=rank&module=package&version=highlights&contentPlacement=3&pgtype=sectionfront";
		//debug code
		System.out.println("starting webscrapper");
		System.out.println("connecting to url");
		System.out.println(url);

		// try connecting to the website
		
		
		try {
			Document d = Jsoup.connect(url).timeout(6000).get();
			
			
			
			
			
		} catch (IOException e) {
			System.out.println("could not connect to website");
			e.printStackTrace();
			return;
		}
		System.out.println("program ran without error");
		
	}
	
	
	
	
	
}
