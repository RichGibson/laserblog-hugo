gap = 2;
zig = 2;
length = 150;
width = 75;
hinge_length = 50;
connector_width=5;

hinge_start = (length - hinge_length) / 2;

//square(width, length);
//like a loop or something? 
//divide the hinge length by gap+zig and then make that many?
cnt = hinge_length/ (gap+zig);

start_hinge = (length-hinge_length)/2;
union() {
    square([ (length - hinge_length)/2, width]);
    
    for (i=[0:1:cnt-1]) {
        translate([start_hinge + (gap+zig) * i + 2,0]) { square([zig, width]);}
        if ( i == 0) {
            translate([start_hinge ,width/2+10]) { square([zig, connector_width]);}
            translate([start_hinge ,width/2-10]) { square([zig, connector_width]);}
        }
        if ( i % 2 == 0 ) {
            translate([start_hinge + (gap+zig) * i+zig + 2,0]) { square([zig, connector_width]);}
            translate([start_hinge + (gap+zig) * i+zig + 2,width-connector_width]) { square([zig, connector_width]);}
        } else {
            translate([start_hinge + (gap+zig) * i+zig + 2,width/2+10]) { square([zig, connector_width]);}
            translate([start_hinge + (gap+zig) * i+zig + 2,width/2-10]) { square([zig, connector_width]);}
        }
        
    }
    translate([(length-hinge_length)/2+hinge_length,0]) {
        square([ (length - hinge_length) /2, width]);
    }
}    
