var plane = [{
        'image': '',
        'model': '',
        'nickname': '',
        'role': [],
        'topSpeed': '',
        'liftoffWeight': '',
        'range': '',
        'powerplant': '',
        'power': ''
    },
    {
        'image': 'https://s6.postimg.org/bslzlxs7l/mustang.jpg',
        'model': 'P-51',
        'nickname': 'Mustang',
        'role': [
            'fighter-bomber',
            'fighter',
            'long-range fighter'
        ],
        'topSpeed': '440 mph',
        'liftoffWeight': '12,100 lbs',
        'range': '1,650 mi',
        'powerplant': '1 × Packard V-1650-7 liquid-cooled V-12, with a 2 stage intercooled supercharger',
        'power': ['1,490 hp (1,111 kW) at 3,000 rpm'],
        'description': "Praesent eros lacus, ornare sit amet elit a, pellentesque commodo augue. Suspendisse eleifend risus at ultrices imperdiet. Ut vitae tristique orci, a efficitur tortor. Nullam at imperdiet risus. Vestibulum et odio purus. Nulla facilisi. Donec ultricies, arcu nec commodo tempor, libero mauris venenatis quam, in ornare sapien felis non neque. Phasellus sed ultrices nibh, et scelerisque tellus."
    },
    {
        'image': 'https://s6.postimg.org/6v8f0tq8h/tomcat.jpg',
        'model': 'F-14',
        'nickname': 'Tomcat',
        'role': [
            'interceptor',
            'air superiority fighter',
            'multirole fighter'
        ],
        'topSpeed': ' Mach 2.34 (1,544 mph, 2,485 km/h)',
        'liftoffWeight': '74,350 lbs',
        'range': '500 nmi',
        'powerplant': '2 × General Electric F110-GE-400 afterburning turbofans',
        'power': [
            '16,610 lbf (73.9 kN) each',
            '28,200 lbf (134 kN) each'
        ],
        "description": "Nulla malesuada elit et nunc convallis, sed iaculis odio malesuada. Mauris gravida nunc vitae massa ultrices, quis mattis metus pulvinar. Suspendisse euismod enim sed dolor facilisis lobortis. Sed eget neque sit amet erat imperdiet pharetra nec id quam. Suspendisse felis tellus, placerat sed convallis at, tempor eu libero. Nullam vestibulum et nisl ac porta. Proin velit est, malesuada sit amet suscipit ac, consequat scelerisque dui. In sed aliquam est, quis aliquam ligula."
    },
    {
        'image': 'https://s6.postimg.org/brc1siqdt/gripen.jpg',
        'model': 'JAS 39',
        'nickname': 'Gripen',
        'role': [
            'fighter',
            'attack',
            'reconnaissance'
        ],
        'topSpeed': ' Mach 2 (2,204 km/h 1,190 kn; 1,370 mph)',
        'liftoffWeight': '31,000 lbs',
        'range': '432 nmi',
        'powerplant': ' 1 × Volvo RM12 afterburning turbofan',
        'power': [
            '54 kN (12,100 lbf)',
            '80.5 kN (18,100 lbf)'
        ],
        "description": "Cras vitae turpis eget nibh efficitur interdum lobortis ac orci. Donec bibendum dignissim nibh ac commodo. Ut ullamcorper convallis ex, sed sagittis elit dapibus ac. Pellentesque nulla eros, pretium ac pretium vitae, venenatis in elit. Curabitur orci turpis, ultrices et purus ut, maximus rutrum ligula. Fusce et finibus magna. Quisque lobortis mi purus, eu hendrerit nisl varius a. Nam cursus ultricies ipsum, a molestie enim tincidunt ut. Integer tempus mauris quis tortor suscipit, vel convallis quam fringilla. Nulla diam mauris, convallis sit amet pharetra ultrices, tincidunt et nisl. Nam a leo vulputate lorem pharetra ullamcorper at id lorem."
    }
]

$('#mustang-button').click(function(event) {
    //console.log("Displaying Mustang")
    displayPlane(1);
});

$('#tomcat-button').click(function(event) {
    displayPlane(2);
});

$('#gripen-button').click(function(event) {
    displayPlane(3);
});

function displayPlane(selection) {
    $('#display-image').attr('src', plane[selection].image);
    fullName = plane[selection].model + ' "' + plane[selection].nickname + '" '
    $('#name').text("Name: " + fullName);
    roles = plane[selection].role.join(", ");
    $('#roles').text("Roles: " + roles);
    $('#top-speed').text("Top Speed: " + plane[selection].topSpeed)
    $('#des-text').text(plane[selection].description)
}