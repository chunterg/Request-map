//$(function(){
			 test("a basic test example", function() {
			  ok( true, "this test is fine" );
			  var value = "hello";
			  equal( "hello", value, "We expect value to be hello" );
			});

			//module("Module A");

			test("first test within module", function() {
			  ok( true, "all pass" );
			});

			test("second test within module", function() {
			  ok( true, "all pass" );
			});

			module("Module B");

			test("some other test", function() {
			  expect(2);
			  equal( true, false, "failing test" );
			  equal( true, true, "passing test" );
			});
			 //  asyncTest('Success request', function() {
			 //  	$.getJSON('http://localhost:3000/ajax/getUserIdByName?callback=?',{"name":"chunterg"},function(data){
			 //  		strictEqual(data.data, '14', 'should be 14');
			 //   		start();	
				// })
			 //  });

			  module('Request.fail')
			 test( "hello test2", function() {
				  ok( 1 == "1", "Passed!" );
				});
			  asyncTest('Fail request', function() {
			  	$.getJSON('http://localhost:3000/ajax/getPostById?callback=?',{"id":123},function(data){
					strictEqual(data.message, 'No match', 'should be No match');
			   		start();	
				}) 
			  });

		//})