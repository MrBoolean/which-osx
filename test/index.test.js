var wosx = require('../');

describe('which-osx', function whichOSXTest() {
  var checks = [
    { version: '15.0.0', expect: { release: 'OS X v10.11' } },
    { version: '14.5.0', expect: { release: 'OS X v10.10.5' } },
    { version: '14.0.0', expect: { release: 'OS X v10.10' } },
    { version: '13.4.0', expect: { release: 'OS X v10.9.5' } },
    { version: '13.0.0', expect: { release: 'OS X v10.9' } },
    { version: '12.6.0', expect: { release: 'OS X v10.8.5' } },
    { version: '12.0.0', expect: { release: 'OS X v10.8' } },
    { version: '11.4.2', expect: { release: 'Mac OS X v10.7.5' } },
    { version: '11.0.0', expect: { release: 'Mac OS X v10.7' } },
    { version: '10.8.0', expect: { release: 'Mac OS X v10.6.8' } },
    { version: '10.0.0', expect: { release: 'Mac OS X v10.6' } },
    { version: '9.8.0', expect: { release: 'Mac OS X v10.5.8' } },
    { version: '9.0.0', expect: { release: 'Mac OS X v10.5' } },
    { version: '8.11.0', expect: { release: 'Mac OS X v10.4.11' } },
    { version: '8.0.0', expect: { release: 'Mac OS X v10.4' } },
    { version: '7.9.0', expect: { release: 'Mac OS X v10.3.9' } },
    { version: '7.0.0', expect: { release: 'Mac OS X v10.3' } },
    { version: '6.8.0', expect: { release: 'Mac OS X v10.2.8' } },
    { version: '6.0.1', expect: { release: 'Mac OS X v10.2' } },
    { version: '5.5.0', expect: { release: 'Mac OS X v10.1.5' } },
    { version: '5.1.0', expect: { release: 'Mac OS X v10.1.1' } },
    { version: '1.4.1', expect: { release: 'Mac OS X v10.1' } },
    { version: '1.3.1', expect: [{ release: 'Mac OS X v10.0.4' }, { release: 'Mac OS X v10.0' }] },
    { version: '1.3.1', expect: [{ release: 'Mac OS X v10.0.4' }, { release: 'Mac OS X v10.0' }] },
    { version: '1.2.1', expect: { release: 'Mac OS X Public Beta' } },
    { version: '1.1.0', expect: { release: 'Mac OS X DP4' } },
    { version: '1.0.0', expect: { release: 'Mac OS X DP3' } },
    { version: '0.2.0', expect: { release: 'Mac OS X DP2' } },
    { version: '0.1.0', expect: { release: 'Mac OS X DP' } }
  ];

  checks.forEach(function(item) {
    it(`returns "${JSON.stringify(item.expect)} if the darwin version equals to ${item.version}"`, function() {
      var found = wosx(item.version);

      found.should.be.an.Object();
      found.should.containDeep(item.expect);
    });
  });
});
