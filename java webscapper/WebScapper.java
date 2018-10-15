package webScapper;

import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class WebScapper {

	private String url;
	
	public WebScapper() {
		
	}
	
	public void setURL(String u) {
		url =u;
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
			Document doc = Jsoup.connect(url).timeout(0).get();//gets the website
			System.out.println("connected");
			String title = doc.title();// gets the title of the website
			
			 //String description = doc.select("meta[name=description]").get(0).attr("content");
			 //System.out.println("Meta description : " + description); 
			
			//gets all of the links and there descriptions
			
			/*Elements links = doc.select("a[href]");  
			for (Element link : links) {  
			    System.out.println("\nlink : " + link.attr("href"));  
			    System.out.println("text : " + link.text());  
			}  */
			
			//gets the contents by id
			//Element content = doc.getElementById("content");
			//Elements text  = content.getElementsByTag("p");
			
			
			//gets the article and prints the article to the console
			Elements paragraphs = doc.getElementsByTag("p");
		      for (Element paragraph : paragraphs) {
		            System.out.println(paragraph.text());
		      }
			
			
			
		} catch (IOException e) {
			System.out.println("could not connect to website");
			e.printStackTrace();
			return;
		}
		
		System.out.println("program ran without error");
		
	}
	
	
	
	
	
}
