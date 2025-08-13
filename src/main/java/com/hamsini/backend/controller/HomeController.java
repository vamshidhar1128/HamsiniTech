package com.hamsini.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
  @GetMapping("/")
    public String homePage() {
        // This returns index.html from templates/
        return "index";
    }

    @GetMapping("/blogs")
    public String blogsPage() {
        return "blogs"; // loads templates/blogs.html
    }

    @GetMapping("/newBatches")
    public String newBatchesPage() {
        return "newBatches"; // loads templates/newBatches.html
    }

    @GetMapping("/hire")
    public String hirePage() {
        return "hire"; // loads templates/hire.html
    }

    @GetMapping("/online")
    public String onlinePage() {
        return "online"; // loads templates/online.html
    }
    @GetMapping("/offline")
    public String offlinePage() {
        return "offline"; // loads templates/offline.html
    }
    @GetMapping("/assistance")
    public String assistancePage() {
        return "assistance"; // loads templates/assistance.html
    }
    @GetMapping("/certification")
    public String certificationPage() {
        return "certification"; // loads templates/certification.html
    }

    @GetMapping("/about")
    public String aboutPage() {
        return "about"; // loads templates/about.html
    }
    @GetMapping("/contact")
    public String contactPage() {
        return "contact"; // loads templates/contact.html
    }

    @GetMapping("/fullStack")
    public String fullStackPage() {
        return "fullStack"; // loads templates/fullStack.html
    }
    @GetMapping("/awsDevops")
    public String awsDevopsPage() {
        return "awsDevops"; // loads templates/awsDevops.html
    }
    @GetMapping("/azureDevops")
    public String azureDevopsPage() {
        return "azureDevops"; // loads templates/azureDevops.html
    }
    @GetMapping("/dataAnalytics")
    public String dataAnalyticsPage() {
        return "dataAnalytics"; // loads templates/dataAnalytics.html
    }
    @GetMapping("/dataScience")
    public String dataSciencePage() {
        return "dataScience"; // loads templates/dataScience.html
    }
    @GetMapping("/gen")
    public String genPage() {
        return "gen"; // loads templates/gen.html
    }
    @GetMapping("/powerBi")
    public String powerBiPage() {
        return "powerBi"; // loads templates/powerBi.html
    }
    @GetMapping("/java")
    public String javaPage() {
        return "java"; // loads templates/java.html
    }
    @GetMapping("/react")
    public String reactPage() {
        return "react"; // loads templates/react.html
    }


}


