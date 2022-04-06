self.addEventListener('push', function(e) {
   var options = {
       body: 'Test Message',
       vibrate: [100,50,100],
       data: {
           dateOfArrival: Date.now(),
           primaryKey: '2'
       },
       actions: [
           {
               action: 'explore', title: 'Explore'
           },
           {
               action: 'close', title: 'Close'
           }
       ]
   }

   e.waitUntil(
       self.registration.showNotification('Test Message', options)
   );
});