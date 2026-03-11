/* basic dimensions */

// table height 29"
// 

// leg height = casters + leg height + 3/4" table top
// 29-5.85 = 23.15" = 588 mm

// table height without castors 23.15"
// that is 588 mm

cross_width = 38; // 1 1/2"
cross_height = 89; // 3 1/2" 
cross_length = 838.2; // 33"
long_cross_length=914.4; // 3 inches longer

// Materials
// 4 long crosses - 2x4x36"
// 5 short crosses - 2x4x33" one one each side, plus one in the middle on the top
// 4 legs 2x4x21.6535" something is weird about this. TBD
// 2 pieces of plywood 36"x36" x 3/4" preferably one nice side


leg_height = 588; // subtract the top and bottom!
leg_height = 588-38; // subtract the top and bottom!


translate([50,35,0]) rotate([90,0,180]) import("2835T16_Mighty-Lite Caster.stl", convexity=3);
translate([50,long_cross_length-35,0]) rotate([90,0,180]) import("2835T16_Mighty-Lite Caster.stl", convexity=3);

translate([long_cross_length-50,35,0]) rotate([90,0,180]) import("2835T16_Mighty-Lite Caster.stl", convexity=3);
translate([long_cross_length-50,long_cross_length-35,0]) rotate([90,0,180]) import("2835T16_Mighty-Lite Caster.stl", convexity=3);

// plywood 19 mm thick

// cube([cross_width, cross_length, cross_height ], center=true);


module top_bottom_frame() {
    // red left and right
    color([1,0,0]) translate([0,cross_width,0]) cross_piece();
    color([1,0,0]) translate([cross_length+38, cross_width,0]) cross_piece();

    // table brace on top? don't need on bottom
    color([1,.5,.5]) translate([(cross_length+38)/2, cross_width,0]) cross_piece();

    // blue sides
    color([0,0,1])translate([914.4,0,0]) rotate([0,0,90]) long_cross_piece();
    color([0,0,1])translate([914.4,cross_length+cross_width,0]) rotate([0,0,90]) long_cross_piece();
}



module cross_piece() {     cube([cross_width, cross_length, cross_height ], center=false); }
module long_cross_piece() {     cube([cross_width, long_cross_length, cross_height ], center=false); }


module leg() {
     color([0,1,0]) cube([cross_width, leg_height,cross_height], center=false);
}



// top and bottom plywood
module top_bottom() {
    color([1,.51,1]) translate([0,0,0]) cube([914.4,914.4, 19.05]); 
}
// top and bottom frame
translate([0,0, 19])top_bottom_frame();
translate([0,0, leg_height+19-cross_height]) top_bottom_frame();

//legs!
color([0,.15,0]) translate([cross_width,cross_length+cross_width ,19])rotate([90,0,0]) leg(); // good
color([0,.30,0]) translate([cross_width,cross_height+cross_width,19])rotate([90,0,0]) leg();  // good


color([1,.45,0]) translate([cross_length,cross_length+cross_width,19])rotate([90,0,0]) leg(); //good
color([1,.60,0]) translate([cross_length,cross_height+cross_width,19])rotate([90,0,0]) leg(); //good


color([1,.51,1]) top_bottom();
color([0,1,1]) translate([0,0,leg_height+19])top_bottom();