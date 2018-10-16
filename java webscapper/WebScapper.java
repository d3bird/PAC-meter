package webScapper;

import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;



/** @file WebScapper.java
 * @category Web Scraper
 * @version 1.3
 * 
 * @author Scott Crawford (d3bird)
 */

public class WebScapper {

	private String url;
	
	public WebScapper() {
		
	}
	
	
	/**
	 * sets the url to a what ever u is set to
	 * @author Scott Crawford (d3bird)
	 * @param String u
	 */
	public void setURL(String u) {
		url =u;
	}
	
	/**
	 * gets the name of the article
	 * @author Scott Crawford (d3bird)
	 * @return String
	 */
	public String getTitle() {
		try {
			Document doc = Jsoup.connect(url).timeout(0).get();
			return doc.title();
		} catch (IOException e) {
			e.printStackTrace();
		}//gets the website
		return "error";
	}
	
	
	/**
	 * gets all of the links and there descriptions prints them to the screen
	 * @author Scott Crawford (d3bird)
	 */
	public void getLinks() {
		Document doc;
		try {
			doc = Jsoup.connect(url).timeout(0).get();
			Elements links = doc.select("a[href]");  
			
			for (Element link : links) {  
			    System.out.println("\nlink : " + link.attr("href"));  
			    System.out.println("text : " + link.text());  
			}  
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	/**
	 * @param none
	 *  takes the url that has been set and then takes the article from the article and the title from that page using Jsoup
	 * 
	 * @return none
	 * @author Scott Crawford (d3bird)
	 */
	public void getArticle() {
		//for testing purposes
		//url ="https://www.nytimes.com/2018/10/12/science/cats-v-rats-in-new-york-the-rats-win.html?rref=collection%2Fsectioncollection%2Fscience&action=click&contentCollection=science&region=rank&module=package&version=highlights&contentPlacement=8&pgtype=sectionfront";
		//url = "http://www.bostonherald.com/news/local_coverage/2018/10/nathan_carman_ordered_to_bring_rifle_to_deposition_this_month";
		//debug code
		System.out.println("starting webscrapper");
		System.out.println("connecting to url");
		System.out.println(url);

		// try connecting to the website
		try {
			Document doc = Jsoup.connect(url).timeout(0).get();//gets the website
			System.out.println("connected");
			System.out.println("");
			System.out.println(doc.title());

			System.out.println("");

			//gets the article and prints the article to the console
			Elements paragraphs = doc.getElementsByTag("p");
		      for (Element paragraph : paragraphs) {
		    	  if(paragraph.text().contains(" ")) {
		            System.out.println(paragraph.text());
					//System.out.println("");
					//System.out.println("");

		    	  }
		      }
			
				System.out.println("");

			
		} catch (IOException e) {
			System.out.println("could not connect to website");
			e.printStackTrace();
			return;
		}
		
		System.out.println("program ran without error");
		
	}
	
	
	
	
	
}
