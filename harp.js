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
        let tabText = tabPart.slice(1);
        if (kind == '_') {
          document.write('<font class="space">-</font>');
        } else if (kind == 'd') { // draw
          document.write('<font class="r">' + tabText + '</font>');
        } else if (kind == 'b') { // blow
          document.write('<font class="b">' + tabText + '</font>');
        }
      }
    }
  }

  document.write('</td></tr>');
}
