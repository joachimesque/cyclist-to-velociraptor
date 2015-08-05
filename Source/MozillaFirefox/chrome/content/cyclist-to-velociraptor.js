(function() {

    function walk(node)
    {
        // I stole this function from here:
        // http://is.gd/mwZp7E

        var child, next;

        switch ( node.nodeType )
        {
            case 1:  // Element
            case 9:  // Document
            case 11: // Document fragment
                child = node.firstChild;
                while ( child )
                {
                    next = child.nextSibling;
                    walk(child);
                    child = next;
                }
                break;

            case 3: // Text node
                handleText(node);
                break;
        }
    }

    function handleText(textNode)
    {
        var v = textNode.nodeValue;

    v = v.replace(/\bBIKE\b/g, "RAPTOR");
    v = v.replace(/\bBike\b/g, "Raptor");
    v = v.replace(/\bbike\b/g, "raptor");
    v = v.replace(/\bBIKES\b/g, "RAPTORS");
    v = v.replace(/\bBikes\b/g, "Raptors");
    v = v.replace(/\bbikes\b/g, "raptors");

    v = v.replace(/\bCYCLE\b/g, "RAPTOR");
    v = v.replace(/\bCycle\b/g, "Raptor");
    v = v.replace(/\bcycle\b/g, "raptor");
    v = v.replace(/\bCYCLES\b/g, "RAPTORS");
    v = v.replace(/\bCycles\b/g, "Raptors");
    v = v.replace(/\bcycles\b/g, "raptors");

    v = v.replace(/\bBICYCLE\b/g, "VELOCIRAPTOR");
    v = v.replace(/\bBicycle\b/g, "Velociraptor");
    v = v.replace(/\bbicycle\b/g, "velociraptor");
    v = v.replace(/\bBICYCLES\b/g, "VELOCIRAPTORS");
    v = v.replace(/\bBicycles\b/g, "Velociraptors");
    v = v.replace(/\bbicycles\b/g, "velociraptors");

    v = v.replace(/\bCYCLIST\b/g, "RAPTOR");
    v = v.replace(/\bCyclist\b/g, "Raptor");
    v = v.replace(/\bcyclist\b/g, "raptor");
    v = v.replace(/\bCYCLISTS\b/g, "RAPTORS");
    v = v.replace(/\bCyclists\b/g, "Raptors");
    v = v.replace(/\bcyclists\b/g, "raptors");

    v = v.replace(/\bBIYCLIST\b/g, "VELOCIRAPTOR");
    v = v.replace(/\bBiyclist\b/g, "Velociraptor");
    v = v.replace(/\bbicyclist\b/g, "velociraptor");
    v = v.replace(/\bBICYCLISTS\b/g, "VELOCIRAPTORS");
    v = v.replace(/\bBicyclists\b/g, "Velociraptors");
    v = v.replace(/\bbicyclists\b/g, "velociraptors");

    v = v.replace(/\bBIKING\b/g, "RAPTOR RIDING");
    v = v.replace(/\bBiking\b/g, "Raptor Riding");
    v = v.replace(/\bbiking\b/g, "raptor riding");

    v = v.replace(/\bBIKED\b/g, "RAPTORED");
    v = v.replace(/\bBiked\b/g, "Raptored");
    v = v.replace(/\bbiked\b/g, "raptored");

    v = v.replace(/\bCYCLING\b/g, "RAPTOR RIDING");
    v = v.replace(/\bCycling\b/g, "Raptor Riding");
    v = v.replace(/\bcycling\b/g, "raptor riding");

    v = v.replace(/\bCYCLED\b/g, "RAPTORED");
    v = v.replace(/\bCycled\b/g, "Raptored");
    v = v.replace(/\bcycled\b/g, "raptored");


    v = v.replace(/\bBICYCLING\b/g, "VELOCIRAPTOR RIDING");
    v = v.replace(/\bBicycling\b/g, "Velociraptor Riding");
    v = v.replace(/\bbicycling\b/g, "velociraptor riding");

    v = v.replace(/\bBIKER\b/g, "RAPTOR RIDER");
    v = v.replace(/\bBiker\b/g, "Raptor Rider");
    v = v.replace(/\bbiker\b/g, "raptor rider");
    v = v.replace(/\bBIKERS\b/g, "RAPTOR RIDERS");
    v = v.replace(/\bBikers\b/g, "Raptor Riders");
    v = v.replace(/\bbikers\b/g, "raptor riders");

    v = v.replace(/\bBIKELANE\b/g, "RAPTORLANE");
    v = v.replace(/\bBikelane\b/g, "Raptorlane");
    v = v.replace(/\bbikelane\b/g, "raptorlane");
    v = v.replace(/\bBIKELANES\b/g, "RAPTORLANE");
    v = v.replace(/\bBikelanes\b/g, "Raptorlane");
    v = v.replace(/\bbikelanes\b/g, "raptorlane");

    v = v.replace(/\bBIKESHARE\b/g, "RAPTORSHARE");
    v = v.replace(/\bBikeshare\b/g, "Raptorshare");
    v = v.replace(/\bbikeshare\b/g, "raptorshare");
    v = v.replace(/\bBIKESHARES\b/g, "RAPTORSHARE");
    v = v.replace(/\bBikeshares\b/g, "Raptorshare");
    v = v.replace(/\bbikeshares\b/g, "raptorshare");
    v = v.replace(/\bCITIBIKE\b/g, "CITIRAPTOR");
    v = v.replace(/\bCitiBike\b/g, "CitiRaptor");
    v = v.replace(/\bCitibike\b/g, "Citiraptor");
    v = v.replace(/\bcitibike\b/g, "citiraptor");

        textNode.nodeValue = v;
    }

    function windowLoadHandler()
    {
        // Dear Mozilla: I hate you for making me do this.
        window.removeEventListener('load', windowLoadHandler);

        document.getElementById('appcontent').addEventListener('DOMContentLoaded', function(e) {
            walk(e.originalTarget.body);
        });
    }

    window.addEventListener('load', windowLoadHandler);
}());
