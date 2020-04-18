class Github {
   constructor() {
      this.client_id = "badbf2337f3994179ac9";
      this.client_secret = "df7673e4ff145821d49d07834cc77399cdc4ffd8";
      this.repos_count = 5;
      this.repos_sort = 'created: asc'
   }

   async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const profile = await profileResponse.json();

      const repos = await repoResponse.json();

      return {
         profile,
         repos
      }
   }
}