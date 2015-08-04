walk(document.body);

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

	v = v.replace(/\bBike\b/g, "raptor");
	v = v.replace(/\bbike\b/g, "raptor");
	v = v.replace(/\bBikes\b/g, "raptors");
	v = v.replace(/\bbikes\b/g, "raptors");

	v = v.replace(/\bBicycle\b/g, "raptor");
	v = v.replace(/\bbicycle\b/g, "raptor");
	v = v.replace(/\bBicycles\b/g, "raptors");
	v = v.replace(/\bbicycles\b/g, "raptors");

	v = v.replace(/\bCyclist\b/g, "Velociraptor");
	v = v.replace(/\bcyclist\b/g, "velociraptor");
	v = v.replace(/\bCyclists\b/g, "Velociraptors");
	v = v.replace(/\bcyclists\b/g, "velociraptors");

	v = v.replace(/\bBiyclist\b/g, "Velociraptor");
	v = v.replace(/\bbicyclist\b/g, "velociraptor");
	v = v.replace(/\bBicyclists\b/g, "Velociraptors");
	v = v.replace(/\bbicyclists\b/g, "velociraptors");

	textNode.nodeValue = v;
}


