import filteredFeelsNewPost from "../images/projects/filteredfeels/filteredfeels_newpost.png";
import filteredFeelsAbout from "../images/projects/filteredfeels/filteredfeels_about.png";
import filteredFeelsPosts from "../images/projects/filteredfeels/filteredfeels_posts.png";
import bsyncLogin from "../images/projects/b-sync/bsync_login.png";
import bsyncDashboard from "../images/projects/b-sync/bsync_dashboard.png";
import bsyncHousehold from "../images/projects/b-sync/bsync_householdmgmt.png";

export const projectImages: Record<string, string[]> = {
  filteredFeels: [filteredFeelsNewPost.src, filteredFeelsAbout.src, filteredFeelsPosts.src],
  bSync: [bsyncLogin.src, bsyncDashboard.src, bsyncHousehold.src],
};
