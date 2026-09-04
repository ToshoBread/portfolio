import filteredFeelsNewPost from "../images/projects/filteredfeels/filteredfeels_newpost.png";
import filteredFeelsAbout from "../images/projects/filteredfeels/filteredfeels_about.png";
import filteredFeelsPosts from "../images/projects/filteredfeels/filteredfeels_posts.png";
import bsyncLogin from "../images/projects/b-sync/bsync_login.png";
import bsyncDashboard from "../images/projects/b-sync/bsync_dashboard.png";
import bsyncHousehold from "../images/projects/b-sync/bsync_householdmgmt.png";
import sakuraRecordsOG from "../images/projects/sakurarecords/sakurarecords_og.png";
import sakuraRecordsDashboard from "../images/projects/sakurarecords/sakurarecords_dashboard.png";
import sakuraRecordsPO from "../images/projects/sakurarecords/sakurarecords_po.png";

export const projectImages: Record<string, (typeof filteredFeelsNewPost)[]> = {
  filteredFeels: [filteredFeelsNewPost, filteredFeelsAbout, filteredFeelsPosts],
  bSync: [bsyncLogin, bsyncDashboard, bsyncHousehold],
  sakuraRecords: [sakuraRecordsOG, sakuraRecordsDashboard, sakuraRecordsPO],
};
