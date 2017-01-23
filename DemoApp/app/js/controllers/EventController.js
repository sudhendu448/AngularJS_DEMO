'use strict';
eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.event = {
            name: "Angular Boot Camp",
            date: "1/22/2017",
            time: "10:30 am",
            location: {
                address: "Google Headquarters",
                city: "Mountain View",
                province: "CA"
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName:'Bob Smith',
                    duration:'1 hr',
                    level:'Advanced',
                    abstract:'Example 1',
                    upVoteCount:0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName:'John Doe',
                    duration:'1.5 hrs',
                    level:'Intermediate',
                    abstract:'Example 2',
                    upVoteCount:0
                },
                {
                    name: 'Well Behaved controller',
                    creatorName:'Jane Doe',
                    duration:'2 hrs',
                    level:'Beginner',
                    abstract:'Example 3',
                    upVoteCount:0
                }
            ]
        }
        $scope.upVoteSession=function(session)
        {
            session.upVoteCount++;
        };
        $scope.downVoteSession=function(session)
        {
            session.upVoteCount--;
        };
    });