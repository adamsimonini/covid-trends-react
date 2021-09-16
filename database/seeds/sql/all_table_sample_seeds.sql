USE covid_trends; 

INSERT INTO provinces SET province_code=1, full_name="Canada", alpha_code="CA", region="National";
INSERT INTO provinces SET province_code=10, full_name="Newfoundland and Labrador", alpha_code="NL", region="Atlantic";
INSERT INTO provinces SET province_code=11, full_name="Prince Edward Island",	alpha_code="PE", region="Atlantic";
INSERT INTO provinces SET province_code=12, full_name="Nova Scotia",	alpha_code="NS", region="Atlantic";
INSERT INTO provinces SET province_code=13, full_name="New Brunswick",	alpha_code="NB", region="Atlantic";
INSERT INTO provinces SET province_code=24, full_name="Quebec",	alpha_code="QC", region="Quebec";
INSERT INTO provinces SET province_code=35, full_name="Ontario",	alpha_code="ON", region="Ontario";
INSERT INTO provinces SET province_code=46, full_name="Manitoba",	alpha_code="MB", region="Prairies";
INSERT INTO provinces SET province_code=47, full_name="Saskatchewan",	alpha_code="SK", region="Prairies";
INSERT INTO provinces SET province_code=48, full_name="Alberta",	alpha_code="AB", region="Prairies";
INSERT INTO provinces SET province_code=59, full_name="British Columbia",	alpha_code="BC", region="British Columbia";
INSERT INTO provinces SET province_code=60, full_name="Yukon",	alpha_code="YT", region="Territories";
INSERT INTO provinces SET province_code=61, full_name="Northwest Territories", alpha_code="NT",	region="Territories";
INSERT INTO provinces SET province_code=62, full_name="Nunavut",	alpha_code="NU", region="Territories";
INSERT INTO provinces SET province_code=99, full_name="Repatriated",	alpha_code="RE", region="National";

INSERT INTO health_regions SET hr_uid=1011, province_code=10, name_en="Eastern Regional Health Authority", name_fr="Eastern Regional Health Authority", website_en="https://www.gov.nl.ca/covid-19", website_fr="https://www.gov.nl.ca/covid-19/fr/ressources/" ;

INSERT INTO health_regions SET hr_uid=2418, province_code=24, name_en="Région des Terres-Cries-de-la-Baie-James", name_fr="Région des Terres-Cries-de-la-Baie-James", website_en="https://eeyouistcheecovid19.org/", website_fr="https://eeyouistcheecovid19.org/";

INSERT INTO health_regions SET hr_uid=3556, province_code=35, name_en="Porcupine Health Unit", name_fr="Circonscription sanitaire de Porcupine", website_en="http://www.porcupinehu.on.ca/", website_fr="https://www.porcupinehu.on.ca/fr/";

INSERT INTO health_regions SET hr_uid=4603, province_code=46, name_en="Interlake-Eastern Regional Health Authority", name_fr="Office régional de la santé d'Entre-les-Lacs et de l'Est", website_en="https://www.ierha.ca/default.aspx?cid=23748&lang=1", website_fr="https://www.ierha.ca/default.aspx?cid=23748&lang=1";

INSERT INTO health_regions SET hr_uid=594, province_code=59, name_en="Northern Health", name_fr="Northern Health", website_en="https://www.northernhealth.ca/health-topics/coronavirus-information-covid-19#trusted-information#northern-health", website_fr="https://www.northernhealth.ca/health-topics/coronavirus-information-covid-19#trusted-information#northern-health";

INSERT INTO mobility SET hr_uid="1011", date="2021-04-04", w_o_y="14", year="2021", max_dist_25="0.516961081", max_dist_50="5.011507911", max_dist_75="12.58461344", sum_dist_25="3.312660326", sum_dist_50="13.97319901", sum_dist_75="33.78536743", prop_at_home="75.83404108", 
percent_stay="28.20536058", base_max="4.423862331", base_percent_change_max="13.28354131", base_sum="13.28285828", base_percent_change_sum="5.197230302", base_prop_at_home="70.24649921", base_percent_change_prop_at_home="7.954192647",
base_percent_stay="28.05576384", base_percent_change_percent_stay="0.533212148", percent_change_prev_week_max_dist_50="-3.523128113", percent_change_prev_week_sum_dist_50="5.802332849", percent_change_prev_week_prop_at_home="0.52338616",
percent_change_prev_week_percent_stay="9.996112288", avg_num_devices="27793.42857", sum_num_devices="44731", mobility="24.16595892", pct_change_mobility="-0.394838347", prev_mobility="24.56079727";

INSERT INTO mobility SET hr_uid="2418", date="2021-04-04", w_o_y="14", year="2021", max_dist_25="0.45826694", max_dist_50="1.326782703", max_dist_75="5.441104489", sum_dist_25="0.875967601", sum_dist_50="2.654312081", sum_dist_75="7.558471111", prop_at_home="75.49645758", 
percent_stay="28.29781106", base_max="1.017739032", base_percent_change_max="30.36570882", base_sum="2.373713103", base_percent_change_sum="11.82109907", base_prop_at_home="70.24649921", base_percent_change_prop_at_home="7.954192647",
base_percent_stay="28.05576384", base_percent_change_percent_stay="0.533212148", percent_change_prev_week_max_dist_50="-3.523128113", percent_change_prev_week_sum_dist_50="5.802332849", percent_change_prev_week_prop_at_home="0.52338616",
percent_change_prev_week_percent_stay="9.996112288", avg_num_devices="27793.42857", sum_num_devices="44731", mobility="24.16595892", pct_change_mobility="-0.394838347", prev_mobility="24.56079727";
INSERT INTO mobility SET hr_uid="3556", date="2021-04-04", w_o_y="14", year="2021", max_dist_25="0.45826694", max_dist_50="1.326782703", max_dist_75="5.441104489", sum_dist_25="0.875967601", sum_dist_50="2.654312081", sum_dist_75="7.558471111", prop_at_home="75.49645758", percent_stay="28.29781106", base_max="1.017739032", base_percent_change_max="30.36570882", base_sum="2.373713103", base_percent_change_sum="11.82109907", base_prop_at_home="70.24649921", base_percent_change_prop_at_home="7.954192647", base_percent_stay="28.05576384", base_percent_change_percent_stay="0.533212148", percent_change_prev_week_max_dist_50="-3.523128113", percent_change_prev_week_sum_dist_50="5.802332849", percent_change_prev_week_prop_at_home="0.52338616",
percent_change_prev_week_percent_stay="9.996112288", avg_num_devices="27793.42857", sum_num_devices="44731", mobility="24.16595892", pct_change_mobility="-0.394838347", prev_mobility="24.56079727";
INSERT INTO mobility SET hr_uid="4603", date="2021-04-04", w_o_y="14", year="2021", max_dist_25="0.45826694", max_dist_50="1.326782703", max_dist_75="5.441104489", sum_dist_25="0.875967601", sum_dist_50="2.654312081", sum_dist_75="7.558471111", prop_at_home="75.49645758", percent_stay="28.29781106", base_max="1.017739032", base_percent_change_max="30.36570882", base_sum="2.373713103", base_percent_change_sum="11.82109907", base_prop_at_home="70.24649921", base_percent_change_prop_at_home="7.954192647", base_percent_stay="28.05576384", base_percent_change_percent_stay="0.533212148", percent_change_prev_week_max_dist_50="-3.523128113", percent_change_prev_week_sum_dist_50="5.802332849", percent_change_prev_week_prop_at_home="0.52338616",
percent_change_prev_week_percent_stay="9.996112288", avg_num_devices="27793.42857", sum_num_devices="44731", mobility="24.16595892", pct_change_mobility="-0.394838347", prev_mobility="24.56079727";
INSERT INTO mobility SET hr_uid="594", date="2021-04-04", w_o_y="14", year="2021", max_dist_25="0.45826694", max_dist_50="1.326782703", max_dist_75="5.441104489", sum_dist_25="0.875967601", sum_dist_50="2.654312081", sum_dist_75="7.558471111", prop_at_home="75.49645758", percent_stay="28.29781106", base_max="1.017739032", base_percent_change_max="30.36570882", base_sum="2.373713103", base_percent_change_sum="11.82109907", base_prop_at_home="70.24649921", base_percent_change_prop_at_home="7.954192647", base_percent_stay="28.05576384", base_percent_change_percent_stay="0.533212148", percent_change_prev_week_max_dist_50="-3.523128113", percent_change_prev_week_sum_dist_50="5.802332849", percent_change_prev_week_prop_at_home="0.52338616",
percent_change_prev_week_percent_stay="9.996112288", avg_num_devices="27793.42857", sum_num_devices="44731", mobility="24.16595892", pct_change_mobility="-0.394838347", prev_mobility="24.56079727";

INSERT INTO cases SET hr_uid="1011", province="Alberta", health_region="Calgary", date_report="2021-04-13", cases="510.0", cumulative_cases="64333.0", deaths="2.0", cumulative_deaths="616.0", numtotal_last14="7249.0", numdeaths_last14="12.0", numtotal_last7="4082.0", numdeaths_last7="7.0", avgtotal_last7="583.1428571428571", avgdeaths_last7="1.0";
INSERT INTO cases SET hr_uid="594", province="BC", health_region="Vancouver Coastal", date_report="2021-04-13", cases="226.0", cumulative_cases="28270.0", deaths="0.0", cumulative_deaths="424.0", numtotal_last14="4424.0", numdeaths_last14="19.0", numtotal_last7="2129.0", numdeaths_last7="6.0", avgtotal_last7="304.14285714285717", avgdeaths_last7="0.8571428571428571";
INSERT INTO cases SET hr_uid="3556", province="Ontario", health_region="Toronto", date_report="2021-04-13", cases="0.0", cumulative_cases="374.0", deaths="0.0", cumulative_deaths="4.0", numtotal_last14="17.0", numdeaths_last14="0.0", numtotal_last7="9.0", numdeaths_last7="0.0", avgtotal_last7="1.2857142857142858", avgdeaths_last7="0.0";
INSERT INTO cases SET hr_uid="4603", province="Quebec", health_region="Laval", date_report="2021-04-13", cases="81.0", cumulative_cases="28344.0", deaths="0.0", cumulative_deaths="891.0", numtotal_last14="1213.0", numdeaths_last14="2.0", numtotal_last7="628.0", numdeaths_last7="1.0", avgtotal_last7="89.71428571428571", avgdeaths_last7="0.14285714285714285";

INSERT INTO locations SET forward_sortation_area="A0A", hr_uid="1011", province_code="10";
INSERT INTO locations SET forward_sortation_area="G0W", hr_uid="2418", province_code="24";
INSERT INTO locations SET forward_sortation_area="P0K", hr_uid="3556", province_code="35";
INSERT INTO locations SET forward_sortation_area="R0C", hr_uid="4603", province_code="48";
INSERT INTO locations SET forward_sortation_area="V0C", hr_uid="594", province_code="59";