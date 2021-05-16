function writeSortedLinks(links) {
  let sortedLinks = links.sort(function (a, b) {
    return ('' + a.txt).localeCompare(b.txt);
  });
  document.write('<ul>');
  for (i=0; i<sortedLinks.length; i++) {
    let myLink = sortedLinks[i];
    document.write('<li><a target="_blank" href="' + myLink.href + '">' + myLink.txt + '</a></li>');
  }
  document.write('</ul>');
}

function row(columns) {
  document.write('<tr><td>');

  for (i=0; i<columns.length; i++) {
    let column = columns[i];
    if (i > 0) {
      document.write('</td><td>');
    }

    let tabs = column.split(' ');
    for (j=0; j<tabs.length; j++) {
      let tab = tabs[j];
      if (j > 0) {
        document.write('&nbsp;&nbsp;&nbsp;');
      }

      let tabParts = tab.split('+')
      for (k=0; k<tabParts.length; k++) {
        let tabPart = tabParts[k];
  
        let kind = tabPart.slice(0, 1);
        let len = 3; // quarter note
        let startIdxTabText = 1;
        if (kind >= '0' && kind <= '9') {
          console.log(kind, ' is number');
          len = kind;
          startIdxTabText = 2;
          kind = tabPart.slice(1, 2);
        }
        let tabText = tabPart.slice(startIdxTabText);
        //console.log('kind:', kind, ',len:', len, ',tabText:', tabText);
         
        if (kind == 'd') { // draw
          document.write('<font class="pad draw d' + len + '">' + tabText + '</font>');
        } else if (kind == 'b') { // blow
          document.write('<font class="pad blow b' + len + '">' + tabText + '</font>');
        } else if (kind == 'r') { // rest
          document.write('<font class="pad rest r' + len + '">-</font>');
        } else if (kind == 't') { // text
          document.write('<font class="pad text">' + tabText + '</font>');
        }
      }
    }
  }

  document.write('</td></tr>');
}
